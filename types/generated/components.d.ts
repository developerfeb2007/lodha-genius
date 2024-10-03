import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalProgramme extends Schema.Component {
  collectionName: 'components_homepage_programmes';
  info: {
    displayName: 'Programme';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
    URL: Attribute.String;
  };
}

export interface GlobalProgSection extends Schema.Component {
  collectionName: 'components_homepage_prog_sections';
  info: {
    displayName: 'Programme Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Programme: Attribute.Component<'global.programme', true>;
  };
}

export interface GlobalMetaDetails extends Schema.Component {
  collectionName: 'components_global_meta_details';
  info: {
    displayName: 'Meta Details';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    OGTitle: Attribute.String;
    OGDescription: Attribute.Text;
    OGImage: Attribute.Media<'images'>;
  };
}

export interface GlobalBannerSection extends Schema.Component {
  collectionName: 'components_homepage_banner_sections';
  info: {
    displayName: 'Banner Section';
    description: '';
  };
  attributes: {
    DesktopImage: Attribute.Media<'images'>;
    MobileImage: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Heading: Attribute.String;
    Description: Attribute.RichText;
    URL: Attribute.String;
  };
}

export interface UserUploads extends Schema.Component {
  collectionName: 'components_user_uploads';
  info: {
    displayName: 'Uploads';
  };
  attributes: {
    Photograph: Attribute.Media<'images'> & Attribute.Required;
    Marksheet: Attribute.Media<'images' | 'files'> & Attribute.Required;
    ConsentLetter: Attribute.Media<'images' | 'files'> & Attribute.Required;
  };
}

export interface UserSupport extends Schema.Component {
  collectionName: 'components_user_supports';
  info: {
    displayName: 'Support';
  };
  attributes: {
    EnglishLanguageAssistance: Attribute.Boolean & Attribute.Required;
    PhysicalDisability: Attribute.Boolean & Attribute.Required;
    CognitiveDisability: Attribute.Boolean & Attribute.Required;
    PhysicalHealth: Attribute.Boolean & Attribute.Required;
    MentalHealth: Attribute.Boolean & Attribute.Required;
    OtherCondition: Attribute.Boolean & Attribute.Required;
    SupportRequired: Attribute.Text;
    Source: Attribute.Relation<
      'user.support',
      'oneToOne',
      'api::source.source'
    >;
  };
}

export interface UserSchool extends Schema.Component {
  collectionName: 'components_user_schools';
  info: {
    displayName: 'School';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Board: Attribute.Relation<
      'user.school',
      'oneToOne',
      'api::school-board.school-board'
    >;
    State: Attribute.String & Attribute.Required;
    District_City: Attribute.String & Attribute.Required;
  };
}

export interface UserSchoolDetails extends Schema.Component {
  collectionName: 'components_user_school_details';
  info: {
    displayName: 'School Details';
    description: '';
  };
  attributes: {
    SchoolInfo: Attribute.Component<'user.school'>;
    PointOfContact: Attribute.Component<'user.poc'>;
  };
}

export interface UserPoc extends Schema.Component {
  collectionName: 'components_user_pocs';
  info: {
    displayName: 'POC';
  };
  attributes: {
    PoC: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    CountryCode: Attribute.String & Attribute.Required;
    Number: Attribute.String & Attribute.Required;
    Email: Attribute.Email & Attribute.Required;
  };
}

export interface UserPersonal extends Schema.Component {
  collectionName: 'components_user_personals';
  info: {
    displayName: 'Personal';
    description: '';
  };
  attributes: {
    PersonalDetails: Attribute.Component<'user.contact'>;
    CommunicationAddress: Attribute.Component<'user.address'>;
    PermanentAddress: Attribute.Component<'user.address'>;
  };
}

export interface UserOther extends Schema.Component {
  collectionName: 'components_user_others';
  info: {
    displayName: 'Other';
  };
  attributes: {
    Participation: Attribute.Boolean & Attribute.Required;
    ExamName: Attribute.String;
    ExamQualified: Attribute.Boolean;
    ExtraCurricularInterests: Attribute.Boolean;
    Interests: Attribute.Text;
  };
}

export interface UserOtherInfo extends Schema.Component {
  collectionName: 'components_user_other_infos';
  info: {
    displayName: 'Other Info';
  };
  attributes: {
    OtherInfo: Attribute.Component<'user.other'>;
    Support: Attribute.Component<'user.support'>;
  };
}

export interface UserGuardian2 extends Schema.Component {
  collectionName: 'components_user_guardian2s';
  info: {
    displayName: 'Guardian2';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Contact: Attribute.String;
    Email: Attribute.Email;
    Profession: Attribute.Relation<
      'user.guardian2',
      'oneToOne',
      'api::profession.profession'
    >;
    Relation: Attribute.Relation<
      'user.guardian2',
      'oneToOne',
      'api::relation.relation'
    >;
    AnnualIncome: Attribute.Relation<
      'user.guardian2',
      'oneToOne',
      'api::annual-income.annual-income'
    >;
    CountryCode: Attribute.String & Attribute.Required;
  };
}

export interface UserGuardian1 extends Schema.Component {
  collectionName: 'components_user_guardian1s';
  info: {
    displayName: 'Guardian1';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Contact: Attribute.String & Attribute.Required;
    Email: Attribute.Email & Attribute.Required;
    Profession: Attribute.Relation<
      'user.guardian1',
      'oneToOne',
      'api::profession.profession'
    >;
    Relation: Attribute.Relation<
      'user.guardian1',
      'oneToOne',
      'api::relation.relation'
    >;
    AnnualIncome: Attribute.Relation<
      'user.guardian1',
      'oneToOne',
      'api::annual-income.annual-income'
    >;
    CountryCode: Attribute.String & Attribute.Required;
  };
}

export interface UserGuardianDetails extends Schema.Component {
  collectionName: 'components_user_guardian_details';
  info: {
    displayName: 'Guardian Details';
    description: '';
  };
  attributes: {
    Guardian1: Attribute.Component<'user.guardian1'>;
    Guardian2: Attribute.Component<'user.guardian2'>;
  };
}

export interface UserContact extends Schema.Component {
  collectionName: 'components_user_contacts';
  info: {
    displayName: 'Contact';
    description: '';
  };
  attributes: {
    StudentFirstName: Attribute.String & Attribute.Required;
    StudentLastName: Attribute.String & Attribute.Required;
    Gender: Attribute.Relation<
      'user.contact',
      'oneToOne',
      'api::gender.gender'
    >;
    DOB: Attribute.Date & Attribute.Required;
    Class: Attribute.Relation<'user.contact', 'oneToOne', 'api::class.class'>;
    Email: Attribute.Email & Attribute.Required;
    CountryCode: Attribute.String & Attribute.Required;
    Mobile: Attribute.String & Attribute.Required;
    Track: Attribute.Enumeration<['Science', 'Mathematics']> &
      Attribute.Required;
  };
}

export interface UserAddress extends Schema.Component {
  collectionName: 'components_user_addresses';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    AddressLine1: Attribute.String & Attribute.Required;
    AddressLine2: Attribute.String & Attribute.Required;
    State: Attribute.String & Attribute.Required;
    District_City: Attribute.String & Attribute.Required;
    PIN: Attribute.String & Attribute.Required;
  };
}

export interface UserAcademicRecord extends Schema.Component {
  collectionName: 'components_user_academic_records';
  info: {
    displayName: 'Academic Record';
    description: '';
  };
  attributes: {
    Board: Attribute.Relation<
      'user.academic-record',
      'oneToOne',
      'api::school-board.school-board'
    >;
    CompletionYear: Attribute.Relation<
      'user.academic-record',
      'oneToOne',
      'api::completion-year.completion-year'
    >;
    Percentage: Attribute.Decimal & Attribute.Required;
  };
}

export interface HomepageStuSection extends Schema.Component {
  collectionName: 'components_homepage_stu_sections';
  info: {
    displayName: 'Students Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.RichText;
    URL: Attribute.String;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    BackgroundImage: Attribute.Media<'images'>;
    BGAlt: Attribute.String;
    BGTitle: Attribute.String;
  };
}

export interface HomepageStSection extends Schema.Component {
  collectionName: 'components_homepage_st_sections';
  info: {
    displayName: 'Shaping Tomorrow Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    ShapingTomorrow: Attribute.Component<'homepage.shaping-tomorrow', true>;
  };
}

export interface HomepageShapingTomorrow extends Schema.Component {
  collectionName: 'components_homepage_shaping_tomorrows';
  info: {
    displayName: 'Shaping Tomorrow';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.RichText;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    URL: Attribute.String;
    Video: Attribute.Media<'videos'>;
  };
}

export interface HomepageProgrammeOverview extends Schema.Component {
  collectionName: 'components_homepage_programme_overviews';
  info: {
    displayName: 'Programme Overview';
    description: '';
  };
  attributes: {
    Subject: Attribute.String;
    Image: Attribute.Media<'images'>;
    Video: Attribute.Media<'videos'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.RichText;
    URL: Attribute.String;
    Color: Attribute.String;
  };
}

export interface HomepagePoSection extends Schema.Component {
  collectionName: 'components_homepage_po_sections';
  info: {
    displayName: 'Programme Overview Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    ProgrammeOverview: Attribute.Component<'homepage.programme-overview', true>;
  };
}

export interface DropdownSource extends Schema.Component {
  collectionName: 'components_dropdown_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownSchoolBoard extends Schema.Component {
  collectionName: 'components_dropdown_school_boards';
  info: {
    displayName: 'School Board';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownRelation extends Schema.Component {
  collectionName: 'components_dropdown_relations';
  info: {
    displayName: 'Relation';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownProfession extends Schema.Component {
  collectionName: 'components_dropdown_professions';
  info: {
    displayName: 'Profession';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownLanguage extends Schema.Component {
  collectionName: 'components_dropdown_languages';
  info: {
    displayName: 'Language';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownGender extends Schema.Component {
  collectionName: 'components_dropdown_genders';
  info: {
    displayName: 'Gender';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownFluency extends Schema.Component {
  collectionName: 'components_dropdown_fluencies';
  info: {
    displayName: 'Fluency';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownCompletionYear extends Schema.Component {
  collectionName: 'components_dropdown_completion_years';
  info: {
    displayName: 'Completion Year';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownClass extends Schema.Component {
  collectionName: 'components_dropdown_classes';
  info: {
    displayName: 'Class';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface DropdownAnnualIncome extends Schema.Component {
  collectionName: 'components_dropdown_annual_incomes';
  info: {
    displayName: 'Annual Income';
  };
  attributes: {
    Value: Attribute.String;
  };
}

export interface ApplicationSteps extends Schema.Component {
  collectionName: 'components_application_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    StepTitle: Attribute.String;
    StepDescription: Attribute.RichText;
  };
}

export interface ApplicationStepsSection extends Schema.Component {
  collectionName: 'components_application_steps_sections';
  info: {
    displayName: 'Steps Section';
  };
  attributes: {
    Heading: Attribute.String;
    URL: Attribute.String;
    Steps: Attribute.Component<'application.steps', true>;
  };
}

export interface ApplicationSchedule extends Schema.Component {
  collectionName: 'components_application_schedules';
  info: {
    displayName: 'Schedule';
  };
  attributes: {
    Date: Attribute.DateTime;
    Title: Attribute.String;
  };
}

export interface ApplicationScheduleSection extends Schema.Component {
  collectionName: 'components_application_schedule_sections';
  info: {
    displayName: 'Schedule Section';
  };
  attributes: {
    Heading: Attribute.String;
    Schedule: Attribute.Component<'application.schedule', true>;
  };
}

export interface ApplicationDr extends Schema.Component {
  collectionName: 'components_application_drs';
  info: {
    displayName: 'Documents Required';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.RichText;
  };
}

export interface ApplicationDrSection extends Schema.Component {
  collectionName: 'components_application_dr_sections';
  info: {
    displayName: 'Documents Required section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Image: Attribute.Media<'images'>;
    Title: Attribute.String;
    Alt: Attribute.String;
    DocumentsRequired: Attribute.Component<'application.dr', true>;
  };
}

export interface ApplicationContentSection extends Schema.Component {
  collectionName: 'components_application_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    Heading: Attribute.String;
    ApplicationContent: Attribute.RichText;
  };
}

export interface ApplicationBannerSection extends Schema.Component {
  collectionName: 'components_application_banner_sections';
  info: {
    displayName: 'Banner Section';
  };
  attributes: {
    BannerNote: Attribute.Text;
    Banner: Attribute.Component<'global.banner-section', true>;
  };
}

export interface ApplicationAfSection extends Schema.Component {
  collectionName: 'components_application_af_sections';
  info: {
    displayName: 'Application Form Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
  };
}

export interface ApplicationAa extends Schema.Component {
  collectionName: 'components_application_aas';
  info: {
    displayName: 'About Aptitude';
    description: '';
  };
  attributes: {
    Subject: Attribute.String;
    Image: Attribute.Media<'images'>;
    Video: Attribute.Media<'videos'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.RichText;
    URL: Attribute.String;
    Color: Attribute.String;
  };
}

export interface ApplicationAaSection extends Schema.Component {
  collectionName: 'components_application_aa_sections';
  info: {
    displayName: 'About Aptitude Section';
  };
  attributes: {
    Heading: Attribute.String;
    AboutAptitude: Attribute.Component<'application.aa', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.programme': GlobalProgramme;
      'global.prog-section': GlobalProgSection;
      'global.meta-details': GlobalMetaDetails;
      'global.banner-section': GlobalBannerSection;
      'user.uploads': UserUploads;
      'user.support': UserSupport;
      'user.school': UserSchool;
      'user.school-details': UserSchoolDetails;
      'user.poc': UserPoc;
      'user.personal': UserPersonal;
      'user.other': UserOther;
      'user.other-info': UserOtherInfo;
      'user.guardian2': UserGuardian2;
      'user.guardian1': UserGuardian1;
      'user.guardian-details': UserGuardianDetails;
      'user.contact': UserContact;
      'user.address': UserAddress;
      'user.academic-record': UserAcademicRecord;
      'homepage.stu-section': HomepageStuSection;
      'homepage.st-section': HomepageStSection;
      'homepage.shaping-tomorrow': HomepageShapingTomorrow;
      'homepage.programme-overview': HomepageProgrammeOverview;
      'homepage.po-section': HomepagePoSection;
      'dropdown.source': DropdownSource;
      'dropdown.school-board': DropdownSchoolBoard;
      'dropdown.relation': DropdownRelation;
      'dropdown.profession': DropdownProfession;
      'dropdown.language': DropdownLanguage;
      'dropdown.gender': DropdownGender;
      'dropdown.fluency': DropdownFluency;
      'dropdown.completion-year': DropdownCompletionYear;
      'dropdown.class': DropdownClass;
      'dropdown.annual-income': DropdownAnnualIncome;
      'application.steps': ApplicationSteps;
      'application.steps-section': ApplicationStepsSection;
      'application.schedule': ApplicationSchedule;
      'application.schedule-section': ApplicationScheduleSection;
      'application.dr': ApplicationDr;
      'application.dr-section': ApplicationDrSection;
      'application.content-section': ApplicationContentSection;
      'application.banner-section': ApplicationBannerSection;
      'application.af-section': ApplicationAfSection;
      'application.aa': ApplicationAa;
      'application.aa-section': ApplicationAaSection;
    }
  }
}
