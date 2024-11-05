'use strict';

const { parse } = require('json2csv');
const pocDesignation = require('../../../../api/poc-designation/controllers/poc-designation');
const completionYear = require('../../../../api/completion-year/controllers/completion-year');

module.exports = ({strapi}) => ({
    async exportUserData(ctx) {
        try {
            const fieldsToSelect = ['id', 'firstName', 'lastName', 'email', 'mobile', 'registrationNumber', 'confirmed', 'createdAt', 'ApplicationStep', 'ApplicationStatus', 'TestingStatus', 'InterviewStatus', 'PostApplicationStatus'];
            const refererUrl = ctx.request.header.referer;
            const url = new URL(refererUrl);
            const filters = Object.fromEntries(url.searchParams.entries());
            const transformedFilters = {};
            for (const key in filters) {
                const match = key.match(/filters\[\$and\]\[(\d+)\]\[(.+)\]\[\$(.+)\]/);
                if (match) {
                    const index = match[1];
                    const field = match[2];
                    const operator = match[3];
                    const value = filters[key];
        
                    if (!transformedFilters['$and']) {
                    transformedFilters['$and'] = [];
                    }
        
                    // Initialize the filter object if it doesn't exist
                    if (!transformedFilters['$and'][index]) {
                    transformedFilters['$and'][index] = {};
                    }
        
                    // Assign the value based on the operator
                    transformedFilters['$and'][index][field] = {
                    [`$${operator}`]: value === 'true' ? true : value === 'false' ? false : value,
                    };
                }
            }
            const users = await strapi.entityService.findMany('plugin::users-permissions.user', {
                fields: fieldsToSelect,
                filters: transformedFilters,
                populate: {
                    PersonalContactDetails: {
                        populate: {
                            PersonalDetails: {
                                select: ['StudentFirstName', 'StudentLastName', 'DOB', 'Email', 'Mobile', 'Track'],
                                populate: {
                                    Gender: {
                                        select: ['Value']
                                    },
                                    Class: {
                                        select: ['Value']
                                    }
                                }
                            },
                            CommunicationAddress: {
                                select: ['AddressLine1', 'AddressLine2', 'State', 'PIN', 'District_City']
                            },
                            PermanentAddress: {
                                select: ['AddressLine1', 'AddressLine2', 'State', 'PIN', 'District_City']
                            }
                        }
                    },
                    SchoolDetails: {
                        populate: {
                            SchoolInfo: {
                                select: ['Name', 'State', 'District_City'],
                                populate: {
                                    Board: {
                                        select: ['Value']
                                    }
                                }
                            },
                            PointOfContact: {
                                select: ['Name', 'Number', 'Email'],
                                populate: {
                                    POCDesignation: {
                                        select: ['Value']
                                    }
                                }
                            }
                        }
                    },
                    AcademicRecord: {
                        select: ['Percentage'],
                        populate: {
                            Board: {
                                select: ['Value']
                            },
                            CompletionYear: {
                                select: ['Value']
                            }
                        }
                    },
                    GuardianDetails: {
                        populate: {
                            Guardian1: {
                                select: ['Name', 'Email', 'Contact'],
                                populate: {
                                    Profession: {
                                        select: ['Value']
                                    },
                                    Relation: {
                                        select: ['Value']
                                    },
                                    AnnualIncome: {
                                        select: ['Value']
                                    }
                                }
                            },
                            Guardian2: {
                                select: ['Name', 'Email', 'Contact'],
                                populate: {
                                    Profession: {
                                        select: ['Value']
                                    },
                                    Relation: {
                                        select: ['Value']
                                    },
                                    AnnualIncome: {
                                        select: ['Value']
                                    }
                                }
                            }
                        }
                    },
                    OtherInformation: {
                        populate: {
                            OtherInfo: {
                                select: ['Participation', 'ExamName', 'ExamQualified', 'ExtraCurricularInterests', 'Interests'],
                                populate: {
                                    EnglishProficiency: {
                                        select: ['Value']
                                    },
                                    MotherTongue: {
                                        select: ['Value']
                                    }
                                }
                            },
                            Support: {
                                select: ['EnglishLanguageAssistance', 'PhysicalDisability', 'CognitiveDisability', 'PhysicalHealth', 'MentalHealth', 'OtherCondition', 'SupportRequired'],
                                populate: {
                                    Source: {
                                        select: ['Value']
                                    }
                                }
                            }
                        }
                    },
                    Documents: {
                        populate: {
                            Photograph: {
                                select: ['url']
                            },
                            Marksheet: {
                                select: ['url']
                            },
                            ConsentLetter: {
                                select: ['url']
                            }
                        }
                    },
                    InterviewDetails: {
                        select: ['EventLink', 'InviteeLink']
                    }
                }
            });
            const csvData = users.map(user => {
                return {
                    Id: user.id,
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    Email: user.email,
                    Mobile: user.mobile,
                    RegistrationNumber: user.registrationNumber,
                    Confirmed: user.confirmed,
                    CreatedAt: user.createdAt,
                    ApplicationStep: user.ApplicationStep,
                    ApplicationStatus: user.ApplicationStatus,
                    TestingStatus: user.TestingStatus,
                    InterviewStatus: user.InterviewStatus,
                    PostApplicationStatus: user.PostApplicationStatus,
                    StudentFirstName: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails) ? user.PersonalContactDetails.PersonalDetails.StudentFirstName : null,
                    StudentLastName: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails) ? user.PersonalContactDetails.PersonalDetails.StudentLastName : null,
                    StudentGender: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails && user.PersonalContactDetails.PersonalDetails.Gender) ? user.PersonalContactDetails.PersonalDetails.Gender.Value : null,
                    StudentDOB: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails) ? user.PersonalContactDetails.PersonalDetails.DOB : null,
                    StudentClass: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails && user.PersonalContactDetails.PersonalDetails.Class) ? user.PersonalContactDetails.PersonalDetails.Class.Value : null,
                    StudentEmail: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails) ? user.PersonalContactDetails.PersonalDetails.Email : null,
                    StudentMobile: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails) ? user.PersonalContactDetails.PersonalDetails.Mobile : null,
                    StudentTrack: (user.PersonalContactDetails && user.PersonalContactDetails.PersonalDetails) ? user.PersonalContactDetails.PersonalDetails.Track : null,
                    CAddressLine1: (user.PersonalContactDetails && user.PersonalContactDetails.CommunicationAddress) ? user.PersonalContactDetails.CommunicationAddress.AddressLine1 : null,
                    CAddressLine2: (user.PersonalContactDetails && user.PersonalContactDetails.CommunicationAddress) ? user.PersonalContactDetails.CommunicationAddress.AddressLine2 : null,
                    CState: (user.PersonalContactDetails && user.PersonalContactDetails.CommunicationAddress) ? user.PersonalContactDetails.CommunicationAddress.State : null,
                    CCity: (user.PersonalContactDetails && user.PersonalContactDetails.CommunicationAddress) ? user.PersonalContactDetails.CommunicationAddress.District_City : null,
                    CPIN: (user.PersonalContactDetails && user.PersonalContactDetails.CommunicationAddress) ? user.PersonalContactDetails.CommunicationAddress.PIN : null,
                    PAddressLine1: (user.PersonalContactDetails && user.PersonalContactDetails.PermanentAddress) ? user.PersonalContactDetails.PermanentAddress.AddressLine1 : null,
                    PAddressLine2: (user.PersonalContactDetails && user.PersonalContactDetails.PermanentAddress) ? user.PersonalContactDetails.PermanentAddress.AddressLine2 : null,
                    PState: (user.PersonalContactDetails && user.PersonalContactDetails.PermanentAddress) ? user.PersonalContactDetails.PermanentAddress.State : null,
                    PCity: (user.PersonalContactDetails && user.PersonalContactDetails.PermanentAddress) ? user.PersonalContactDetails.PermanentAddress.District_City : null,
                    PPIN: (user.PersonalContactDetails && user.PersonalContactDetails.PermanentAddress) ? user.PersonalContactDetails.PermanentAddress.PIN : null,
                    SchoolName: (user.SchoolDetails && user.SchoolDetails.SchoolInfo) ? user.SchoolDetails.SchoolInfo.Name : null,
                    SchoolBoard: (user.SchoolDetails && user.SchoolDetails.SchoolInfo && user.SchoolDetails.SchoolInfo.Board) ? user.SchoolDetails.SchoolInfo.Board.Value : null,
                    SchoolState: (user.SchoolDetails && user.SchoolDetails.SchoolInfo) ? user.SchoolDetails.SchoolInfo.State : null,
                    SchoolCity: (user.SchoolDetails && user.SchoolDetails.SchoolInfo) ? user.SchoolDetails.SchoolInfo.District_City : null,
                    POCDesignation: (user.SchoolDetails && user.SchoolDetails.PointOfContact && user.SchoolDetails.PointOfContact.POCDesignation) ? user.SchoolDetails.PointOfContact.POCDesignation.Value : null,
                    POCName: (user.SchoolDetails && user.SchoolDetails.PointOfContact) ? user.SchoolDetails.PointOfContact.Name : null,
                    POCNumber: (user.SchoolDetails && user.SchoolDetails.PointOfContact) ? user.SchoolDetails.PointOfContact.Number : null,
                    POCEmail: (user.SchoolDetails && user.SchoolDetails.PointOfContact) ? user.SchoolDetails.PointOfContact.Email : null,
                    AcademicBoard: (user.AcademicRecord && user.AcademicRecord.Board) ? user.AcademicRecord.Board.Value : null,
                    CompletionYear: (user.AcademicRecord && user.AcademicRecord.CompletionYear) ? user.AcademicRecord.CompletionYear.Value : null,
                    Percentage: user.AcademicRecord ? user.AcademicRecord.Percentage : null,
                    Guardian1Name: (user.GuardianDetails && user.GuardianDetails.Guardian1) ? user.GuardianDetails.Guardian1.Name : null,
                    Guardian1Email: (user.GuardianDetails && user.GuardianDetails.Guardian1) ? user.GuardianDetails.Guardian1.Email : null,
                    Guardian1Contact: (user.GuardianDetails && user.GuardianDetails.Guardian1) ? user.GuardianDetails.Guardian1.Contact : null,
                    Guardian1Profession: (user.GuardianDetails && user.GuardianDetails.Guardian1 && user.GuardianDetails.Guardian1.Profession) ? user.GuardianDetails.Guardian1.Profession.Value : null,
                    Guardian1Relation: (user.GuardianDetails && user.GuardianDetails.Guardian1 && user.GuardianDetails.Guardian1.Relation) ? user.GuardianDetails.Guardian1.Relation.Value : null,
                    Guardian1Income: (user.GuardianDetails && user.GuardianDetails.Guardian1 && user.GuardianDetails.Guardian1.AnnualIncome) ? user.GuardianDetails.Guardian1.AnnualIncome.Value : null,
                    Guardian2Name: (user.GuardianDetails && user.GuardianDetails.Guardian2 && user.GuardianDetails.Guardian2.Name) ? user.GuardianDetails.Guardian2.Name : null,
                    Guardian2Email: (user.GuardianDetails && user.GuardianDetails.Guardian2 && user.GuardianDetails.Guardian2.Email) ? user.GuardianDetails.Guardian2.Email : null,
                    Guardian2Contact: (user.GuardianDetails && user.GuardianDetails.Guardian2 && user.GuardianDetails.Guardian2.Contact) ? user.GuardianDetails.Guardian2.Contact : null,
                    Guardian2Profession: (user.GuardianDetails && user.GuardianDetails.Guardian2 && user.GuardianDetails.Guardian2.Profession) ? user.GuardianDetails.Guardian2.Profession.Value : null,
                    Guardian2Relation: (user.GuardianDetails && user.GuardianDetails.Guardian2 && user.GuardianDetails.Guardian2.Relation) ? user.GuardianDetails.Guardian2.Relation.Value : null,
                    Guardian2Income: (user.GuardianDetails && user.GuardianDetails.Guardian2 && user.GuardianDetails.Guardian2.AnnualIncome) ? user.GuardianDetails.Guardian2.AnnualIncome.Value : null,
                    Participation: (user.OtherInformation && user.OtherInformation.OtherInfo) ? user.OtherInformation.OtherInfo.Participation : null,
                    ExamName: (user.OtherInformation && user.OtherInformation.OtherInfo) ? user.OtherInformation.OtherInfo.ExamName : null,
                    ExamQualified: (user.OtherInformation && user.OtherInformation.OtherInfo) ? user.OtherInformation.OtherInfo.ExamQualified : null,
                    ExtraCurricularInterests: (user.OtherInformation && user.OtherInformation.OtherInfo) ? user.OtherInformation.OtherInfo.ExtraCurricularInterests : null,
                    Interests: (user.OtherInformation && user.OtherInformation.OtherInfo) ? user.OtherInformation.OtherInfo.Interests : null,
                    EnglishProficiency: (user.OtherInformation && user.OtherInformation.OtherInfo && user.OtherInformation.OtherInfo.EnglishProficiency) ? user.OtherInformation.OtherInfo.EnglishProficiency.Value : null,
                    MotherTongue: (user.OtherInformation && user.OtherInformation.OtherInfo && user.OtherInformation.OtherInfo.MotherTongue) ? user.OtherInformation.OtherInfo.MotherTongue.Value : null,
                    EnglishLanguageAssistance: (user.OtherInformation && user.OtherInformation.Support) ? user.OtherInformation.Support.EnglishLanguageAssistance : null,
                    CognitiveDisability: (user.OtherInformation && user.OtherInformation.Support) ? user.OtherInformation.Support.CognitiveDisability : null,
                    PhysicalHealth: (user.OtherInformation && user.OtherInformation.Support) ? user.OtherInformation.Support.PhysicalHealth : null,
                    MentalHealth: (user.OtherInformation && user.OtherInformation.Support) ? user.OtherInformation.Support.MentalHealth : null,
                    OtherCondition: (user.OtherInformation && user.OtherInformation.Support) ? user.OtherInformation.Support.OtherCondition : null,
                    SupportRequired: (user.OtherInformation && user.OtherInformation.Support) ? user.OtherInformation.Support.SupportRequired : null,
                    Source: (user.OtherInformation && user.OtherInformation.Support && user.OtherInformation.Support.Source) ? user.OtherInformation.Support.Source.Value : null,
                    Photograph: user.Documents ? user.Documents.Photograph.url : null,
                    Marksheet: user.Documents ? user.Documents.Marksheet.url : null,
                    ConsentLetter: user.Documents ? user.Documents.ConsentLetter.url : null,
                    InterviewLink: user.InterviewDetails ? user.InterviewDetails.EventLink : null,
                    InviteeLink: user.InterviewDetails ? user.InterviewDetails.InviteeLink : null,
                };
            });
                
            const csv = parse(csvData);
            ctx.set('Content-Disposition', 'attachment; filename=users.csv');
            ctx.set('Content-Type', 'text/csv');
            ctx.body = csv;
        } catch (error) {
            ctx.throw(500, error);
        }
    }
});