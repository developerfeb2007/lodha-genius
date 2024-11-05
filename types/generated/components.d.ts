import type { Schema, Attribute } from '@strapi/strapi';

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

export interface UserResearch extends Schema.Component {
  collectionName: 'components_user_research';
  info: {
    displayName: 'Research';
  };
  attributes: {
    SelectedResearch: Attribute.Relation<
      'user.research',
      'oneToOne',
      'api::research.research'
    >;
    ResearchName: Attribute.String;
    Certificate: Attribute.Media<'images' | 'files'> & Attribute.Required;
  };
}

export interface UserProject extends Schema.Component {
  collectionName: 'components_user_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    SelectedProject: Attribute.Relation<
      'user.project',
      'oneToOne',
      'api::project.project'
    >;
    ProjectName: Attribute.String;
    Certificate: Attribute.Media<'images' | 'files'> & Attribute.Required;
  };
}

export interface UserPostApplication extends Schema.Component {
  collectionName: 'components_user_post_applications';
  info: {
    displayName: 'Post Application';
  };
  attributes: {
    PrepareForCampus: Attribute.Component<'user.campus'>;
    ContactInformation: Attribute.Component<'user.contact-info'>;
  };
}

export interface UserPoc extends Schema.Component {
  collectionName: 'components_user_pocs';
  info: {
    displayName: 'POC';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    CountryCode: Attribute.String & Attribute.Required;
    Number: Attribute.String & Attribute.Required;
    Email: Attribute.Email & Attribute.Required;
    POCDesignation: Attribute.Relation<
      'user.poc',
      'oneToOne',
      'api::poc-designation.poc-designation'
    >;
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
    description: '';
  };
  attributes: {
    Participation: Attribute.Boolean & Attribute.Required;
    ExamName: Attribute.String;
    ExamQualified: Attribute.Boolean;
    ExtraCurricularInterests: Attribute.Boolean;
    Interests: Attribute.Text;
    EnglishProficiency: Attribute.Relation<
      'user.other',
      'oneToOne',
      'api::fluency.fluency'
    >;
    MotherTongue: Attribute.Relation<
      'user.other',
      'oneToOne',
      'api::language.language'
    >;
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

export interface UserInterview extends Schema.Component {
  collectionName: 'components_user_interviews';
  info: {
    displayName: 'Interview';
  };
  attributes: {
    EventLink: Attribute.String;
    InviteeLink: Attribute.String;
  };
}

export interface UserInternship extends Schema.Component {
  collectionName: 'components_user_internships';
  info: {
    displayName: 'Internship';
  };
  attributes: {
    SelectedGrade: Attribute.Relation<
      'user.internship',
      'oneToOne',
      'api::class.class'
    >;
    SelectedInternship: Attribute.Relation<
      'user.internship',
      'oneToOne',
      'api::internship.internship'
    >;
    InternshipName: Attribute.String;
    Certificate: Attribute.Media<'images' | 'files'> & Attribute.Required;
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

export interface UserCourse extends Schema.Component {
  collectionName: 'components_user_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    SelectedCourse: Attribute.Relation<
      'user.course',
      'oneToOne',
      'api::course-enrollment.course-enrollment'
    >;
    CourseName: Attribute.String;
    Certificate: Attribute.Media<'images' | 'files'> & Attribute.Required;
  };
}

export interface UserCourseCom extends Schema.Component {
  collectionName: 'components_user_course_coms';
  info: {
    displayName: 'Course Com';
  };
  attributes: {
    CourseCompleted: Attribute.Component<'user.course', true>;
    ProjectCompleted: Attribute.Component<'user.project', true>;
    ResearchCompleted: Attribute.Component<'user.research', true>;
    InternshipCompleted: Attribute.Component<'user.internship', true>;
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

export interface UserContactInfo extends Schema.Component {
  collectionName: 'components_user_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    CountryCode: Attribute.String;
    Mobile: Attribute.String;
    Email: Attribute.Email;
    OtherSupport: Attribute.Text;
  };
}

export interface UserCampus extends Schema.Component {
  collectionName: 'components_user_campuses';
  info: {
    displayName: 'Campus';
  };
  attributes: {
    ElectiveSubject: Attribute.Relation<
      'user.campus',
      'oneToOne',
      'api::elective.elective'
    >;
    ClothingSize: Attribute.Relation<
      'user.campus',
      'oneToOne',
      'api::size.size'
    >;
    LaptopType: Attribute.Relation<
      'user.campus',
      'oneToOne',
      'api::laptop.laptop'
    >;
    DietryRequirement: Attribute.Relation<
      'user.campus',
      'oneToOne',
      'api::dietry.dietry'
    >;
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

export interface StudentSkill extends Schema.Component {
  collectionName: 'components_student_skills';
  info: {
    displayName: 'Skill';
    description: '';
  };
  attributes: {
    Topic: Attribute.String;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Description: Attribute.Text;
    Title: Attribute.String;
    Faculty: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface StudentScience extends Schema.Component {
  collectionName: 'components_student_sciences';
  info: {
    displayName: 'Science';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    Courses: Attribute.Relation<
      'student.science',
      'oneToMany',
      'api::course.course'
    >;
    CourseHeading: Attribute.String;
  };
}

export interface StudentMathematics extends Schema.Component {
  collectionName: 'components_student_mathematics';
  info: {
    displayName: 'Mathematics';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    Courses: Attribute.Relation<
      'student.mathematics',
      'oneToMany',
      'api::course.course'
    >;
    CourseHeading: Attribute.String;
  };
}

export interface StudentLifeSkill extends Schema.Component {
  collectionName: 'components_student_life_skills';
  info: {
    displayName: 'Life Skill';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Skills: Attribute.Component<'student.skill', true>;
    Description: Attribute.String;
  };
}

export interface StudentGISeminar extends Schema.Component {
  collectionName: 'components_student_g_i_seminars';
  info: {
    displayName: 'G I Seminar';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Seminars: Attribute.Relation<
      'student.g-i-seminar',
      'oneToMany',
      'api::semi-nar.semi-nar'
    >;
  };
}

export interface StudentGISem extends Schema.Component {
  collectionName: 'components_student_g_i_sems';
  info: {
    displayName: 'G I Sem';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Seminars: Attribute.Relation<
      'student.g-i-sem',
      'oneToMany',
      'api::semi-nar.semi-nar'
    >;
  };
}

export interface StudentCoursesOff extends Schema.Component {
  collectionName: 'components_student_courses_offs';
  info: {
    displayName: 'Courses Off';
    description: '';
  };
  attributes: {
    Alt: Attribute.String;
    Title: Attribute.String;
    Image: Attribute.Media<'images'>;
    Topic: Attribute.String;
  };
}

export interface StudentCourse extends Schema.Component {
  collectionName: 'components_student_courses';
  info: {
    displayName: 'Course';
    description: '';
  };
  attributes: {
    Track: Attribute.Enumeration<['Mathematics', 'Science']>;
    Courses: Attribute.Relation<
      'student.course',
      'oneToMany',
      'api::course.course'
    >;
    CourseHeading: Attribute.String;
  };
}

export interface StudentCourseSection extends Schema.Component {
  collectionName: 'components_student_course_sections';
  info: {
    displayName: 'Course Section';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    Course: Attribute.Component<'student.course', true>;
  };
}

export interface StudentCourseOffered extends Schema.Component {
  collectionName: 'components_student_course_offereds';
  info: {
    displayName: 'Course Offered';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Courses: Attribute.Relation<
      'student.course-offered',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface StudentCmiSeminar extends Schema.Component {
  collectionName: 'components_student_cmi_seminars';
  info: {
    displayName: 'CMI Seminar';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.String;
    Seminars: Attribute.Relation<
      'student.cmi-seminar',
      'oneToMany',
      'api::semi-nar.semi-nar'
    >;
  };
}

export interface StudentCmiSem extends Schema.Component {
  collectionName: 'components_student_cmi_sems';
  info: {
    displayName: 'CMI Sem';
    description: '';
  };
  attributes: {
    Video: Attribute.Media<'videos', true>;
    Title: Attribute.String;
    FacultyDetail: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    Thumbnail: Attribute.Media<'images'>;
    Alt: Attribute.String;
    YoutubeURL: Attribute.String;
    Topic: Attribute.String;
  };
}

export interface StudentCLModule extends Schema.Component {
  collectionName: 'components_student_c_l_modules';
  info: {
    displayName: 'C L Module';
  };
  attributes: {
    Heading: Attribute.String;
    Modules: Attribute.Component<'student.c-l-mod', true>;
  };
}

export interface StudentCLMod extends Schema.Component {
  collectionName: 'components_student_c_l_mods';
  info: {
    displayName: 'C L Mod';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Description: Attribute.Text;
    Topic: Attribute.String;
  };
}

export interface SeminarSpeakers extends Schema.Component {
  collectionName: 'components_seminar_speakers';
  info: {
    displayName: 'Speakers';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Designation: Attribute.Text;
    Photo: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Profile: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    Workplace: Attribute.String;
    Thumbnail: Attribute.Media<'images'>;
  };
}

export interface SeminarSpeakerSection extends Schema.Component {
  collectionName: 'components_seminar_speaker_sections';
  info: {
    displayName: 'Speaker Section';
  };
  attributes: {
    Heading: Attribute.String;
    Speakers: Attribute.Component<'seminar.speakers', true>;
  };
}

export interface ScienceTabs extends Schema.Component {
  collectionName: 'components_science_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    TabName: Attribute.String;
  };
}

export interface ScienceFaculty extends Schema.Component {
  collectionName: 'components_science_faculties';
  info: {
    displayName: 'Faculty';
  };
  attributes: {
    Heading: Attribute.String;
    Members: Attribute.Component<'science.faculty-mem', true>;
  };
}

export interface ScienceFacultyMem extends Schema.Component {
  collectionName: 'components_science_faculty_mems';
  info: {
    displayName: 'Faculty Mem';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      [
        'Science Workshops <br/> For Grades 9 & 10',
        'Science Projects <br/> For Grades 11 & 12'
      ]
    >;
    Faculties: Attribute.Relation<
      'science.faculty-mem',
      'oneToMany',
      'api::faculty.faculty'
    >;
  };
}

export interface ScienceCourse extends Schema.Component {
  collectionName: 'components_science_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    Category: Attribute.Enumeration<
      [
        'Science Workshops <br/> For Grades 9 & 10',
        'Science Projects <br/> For Grades 11 & 12'
      ]
    >;
    Courses: Attribute.Relation<
      'science.course',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface ScienceCourseSection extends Schema.Component {
  collectionName: 'components_science_course_sections';
  info: {
    displayName: 'Course Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.String;
    Course: Attribute.Component<'science.course', true>;
  };
}

export interface MathsFacultyMember extends Schema.Component {
  collectionName: 'components_maths_faculty_members';
  info: {
    displayName: 'Faculty Member';
  };
  attributes: {
    Heading: Attribute.String;
    Members: Attribute.Component<'maths.faculty-mem', true>;
  };
}

export interface MathsFacultyMem extends Schema.Component {
  collectionName: 'components_maths_faculty_mems';
  info: {
    displayName: 'Faculty Mem';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    Faculties: Attribute.Relation<
      'maths.faculty-mem',
      'oneToMany',
      'api::faculty.faculty'
    >;
  };
}

export interface MathsCourse extends Schema.Component {
  collectionName: 'components_maths_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    Courses: Attribute.Relation<
      'maths.course',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface MathsCourseSection extends Schema.Component {
  collectionName: 'components_maths_course_sections';
  info: {
    displayName: 'Course Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.String;
    Course: Attribute.Component<'maths.course', true>;
  };
}

export interface MathsCmiSeminar extends Schema.Component {
  collectionName: 'components_maths_cmi_seminars';
  info: {
    displayName: 'CMI Seminar';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.String;
    Seminars: Attribute.Relation<
      'maths.cmi-seminar',
      'oneToMany',
      'api::semi-nar.semi-nar'
    >;
  };
}

export interface MathsCmiSem extends Schema.Component {
  collectionName: 'components_maths_cmi_sems';
  info: {
    displayName: 'CMI Sem';
    description: '';
  };
  attributes: {};
}

export interface LifeSkillCourse extends Schema.Component {
  collectionName: 'components_life_skill_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    > &
      Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String;
    Title: Attribute.String;
    Contents: Attribute.Component<'life-skill.content', true>;
  };
}

export interface LifeSkillContent extends Schema.Component {
  collectionName: 'components_life_skill_contents';
  info: {
    displayName: 'Course Content';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Content: Attribute.Text;
  };
}

export interface LearningModule extends Schema.Component {
  collectionName: 'components_learning_modules';
  info: {
    displayName: 'Module';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface LearningCourse extends Schema.Component {
  collectionName: 'components_learning_courses';
  info: {
    displayName: 'Course';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Courses: Attribute.Relation<
      'learning.course',
      'oneToMany',
      'api::course.course'
    >;
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
    URL: Attribute.String;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    BackgroundImage: Attribute.Media<'images'>;
    BGAlt: Attribute.String;
    BGTitle: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    URL: Attribute.String;
    Video: Attribute.Media<'videos'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    MainColor: Attribute.String;
    BottomColor: Attribute.String;
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

export interface GlobalTopMenu extends Schema.Component {
  collectionName: 'components_global_top_menus';
  info: {
    displayName: 'Top Menu';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
    Class: Attribute.String;
    Submenu: Attribute.Component<'global.submenu', true>;
  };
}

export interface GlobalSubquestion extends Schema.Component {
  collectionName: 'components_global_subquestions';
  info: {
    displayName: 'Subquestion';
  };
  attributes: {
    Question: Attribute.String;
    Link: Attribute.String;
    Class: Attribute.String;
  };
}

export interface GlobalSubmenu extends Schema.Component {
  collectionName: 'components_global_submenus';
  info: {
    displayName: 'Submenu';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
  };
}

export interface GlobalSublink extends Schema.Component {
  collectionName: 'components_global_sublinks';
  info: {
    displayName: 'Sublink';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
  };
}

export interface GlobalSocialMedia extends Schema.Component {
  collectionName: 'components_global_social_medias';
  info: {
    displayName: 'Social Media';
    description: '';
  };
  attributes: {
    LinkedinURL: Attribute.String;
    InstagramURL: Attribute.String;
    FacebookURL: Attribute.String;
    YoutubeURL: Attribute.String;
    TwitterURL: Attribute.String;
  };
}

export interface GlobalSeminar extends Schema.Component {
  collectionName: 'components_global_seminars';
  info: {
    displayName: 'Seminar';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Seminars: Attribute.Relation<
      'global.seminar',
      'oneToMany',
      'api::semi-nar.semi-nar'
    >;
  };
}

export interface GlobalProgramme extends Schema.Component {
  collectionName: 'components_homepage_programmes';
  info: {
    displayName: 'Programme';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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

export interface GlobalPoSection extends Schema.Component {
  collectionName: 'components_global_po_sections';
  info: {
    displayName: 'Programme Overview Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    ProgrammeOverview: Attribute.Component<'global.p-overview', true>;
  };
}

export interface GlobalPOverview extends Schema.Component {
  collectionName: 'components_global_p_overviews';
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
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    URL: Attribute.String;
    Color: Attribute.String;
  };
}

export interface GlobalMobile extends Schema.Component {
  collectionName: 'components_global_mobiles';
  info: {
    displayName: 'Mobile';
  };
  attributes: {
    Mobile: Attribute.String;
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

export interface GlobalLearningModule extends Schema.Component {
  collectionName: 'components_global_learning_modules';
  info: {
    displayName: 'Learning Module';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Topic: Attribute.String;
    Description: Attribute.Text;
    Alt: Attribute.String;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ProfileURL: Attribute.String;
    ButtonText: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
}

export interface GlobalFooter4 extends Schema.Component {
  collectionName: 'components_global_footer_4s';
  info: {
    displayName: 'Footer 4';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
  };
}

export interface GlobalFooter3 extends Schema.Component {
  collectionName: 'components_global_footer_3s';
  info: {
    displayName: 'Footer 3';
  };
  attributes: {
    Heading: Attribute.String;
    Items: Attribute.Component<'global.subquestion', true>;
  };
}

export interface GlobalFooter2 extends Schema.Component {
  collectionName: 'components_global_footer_2s';
  info: {
    displayName: 'Footer 2';
  };
  attributes: {
    Heading: Attribute.String;
    Items: Attribute.Component<'global.sublink', true>;
  };
}

export interface GlobalFooter1 extends Schema.Component {
  collectionName: 'components_global_footer_1s';
  info: {
    displayName: 'Footer 1';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    ContactNumber: Attribute.Component<'global.mobile', true>;
    Email: Attribute.Email;
    Address: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    SocialMedia: Attribute.Component<'global.social-media'>;
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
    URL: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface FaqQuestionAnswer extends Schema.Component {
  collectionName: 'components_faq_question_answers';
  info: {
    displayName: 'Question Answer';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    HashSlug: Attribute.String;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Heading: Attribute.String;
    FAQs: Attribute.Component<'faq.question-answer', true>;
  };
}

export interface ExperienceWeekends extends Schema.Component {
  collectionName: 'components_experience_weekends';
  info: {
    displayName: 'Weekends';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ExperienceTripSection extends Schema.Component {
  collectionName: 'components_experience_trip_sections';
  info: {
    displayName: 'Trip Section';
  };
  attributes: {
    Heading: Attribute.String;
    RecentTrip: Attribute.Component<'experience.recent-trip', true>;
  };
}

export interface ExperienceTestimonial extends Schema.Component {
  collectionName: 'components_experience_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Feedback: Attribute.Text;
    Photo: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Year: Attribute.String;
  };
}

export interface ExperienceTestimonialSection extends Schema.Component {
  collectionName: 'components_experience_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    Heading: Attribute.String;
    Testimonial: Attribute.Component<'experience.testimonial', true>;
  };
}

export interface ExperienceSuccessStories extends Schema.Component {
  collectionName: 'components_experience_success_stories';
  info: {
    displayName: 'Success Stories';
    description: '';
  };
  attributes: {
    Thumbnail: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    YoutubeURL: Attribute.String;
    Video: Attribute.Media<'videos'>;
    Description: Attribute.String;
  };
}

export interface ExperienceSuccessSection extends Schema.Component {
  collectionName: 'components_experience_success_sections';
  info: {
    displayName: 'Success Section';
  };
  attributes: {
    Heading: Attribute.String;
    SuccessStories: Attribute.Component<'experience.success-stories', true>;
  };
}

export interface ExperienceScheduleSection extends Schema.Component {
  collectionName: 'components_experience_schedule_sections';
  info: {
    displayName: 'Schedule Section';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For first time students', 'For returning students']
    >;
    MorningSession: Attribute.Component<'experience.morning', true>;
    NoonSession: Attribute.Component<'experience.noon', true>;
    AfternoonSession: Attribute.Component<'experience.afternoon', true>;
    EveningSession: Attribute.Component<'experience.evening', true>;
    WeekendsSession: Attribute.Component<'experience.weekends', true>;
    Grade: Attribute.Relation<
      'experience.schedule-section',
      'oneToOne',
      'api::grade.grade'
    >;
  };
}

export interface ExperienceRecentTrip extends Schema.Component {
  collectionName: 'components_experience_recent_trips';
  info: {
    displayName: 'Recent Trip';
    description: '';
  };
  attributes: {
    Thumbnail: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    YoutubeURL: Attribute.String;
    Video: Attribute.Media<'videos'>;
    Description: Attribute.String;
  };
}

export interface ExperienceOldStudents extends Schema.Component {
  collectionName: 'components_experience_old_students';
  info: {
    displayName: 'Old Students';
    description: '';
  };
  attributes: {
    Morning: Attribute.Component<'experience.morning', true>;
    Noon: Attribute.Component<'experience.noon', true>;
    Afternoon: Attribute.Component<'experience.afternoon', true>;
    Evening: Attribute.Component<'experience.evening', true>;
    Weekends: Attribute.Component<'experience.weekends', true>;
  };
}

export interface ExperienceNoon extends Schema.Component {
  collectionName: 'components_experience_noons';
  info: {
    displayName: 'Noon';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ExperienceNewStudents extends Schema.Component {
  collectionName: 'components_experience_new_students';
  info: {
    displayName: 'New Students';
    description: '';
  };
  attributes: {
    Grade: Attribute.Relation<
      'experience.new-students',
      'oneToOne',
      'api::grade.grade'
    >;
    Morning: Attribute.Component<'experience.morning', true>;
    Noon: Attribute.Component<'experience.noon', true>;
    Afternoon: Attribute.Component<'experience.afternoon', true>;
    Evening: Attribute.Component<'experience.evening', true>;
    Weekends: Attribute.Component<'experience.weekends', true>;
  };
}

export interface ExperienceMorning extends Schema.Component {
  collectionName: 'components_experience_mornings';
  info: {
    displayName: 'Morning';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ExperienceEvening extends Schema.Component {
  collectionName: 'components_experience_evenings';
  info: {
    displayName: 'Evening';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ExperienceCampus extends Schema.Component {
  collectionName: 'components_experience_campuses';
  info: {
    displayName: 'Campus';
    description: '';
  };
  attributes: {
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Category: Attribute.String;
  };
}

export interface ExperienceCampusLife extends Schema.Component {
  collectionName: 'components_experience_campus_lives';
  info: {
    displayName: 'Campus Life';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    CampusLife: Attribute.Component<'experience.campus', true>;
    Heading: Attribute.String;
    CostText: Attribute.String;
  };
}

export interface ExperienceAfternoon extends Schema.Component {
  collectionName: 'components_experience_afternoons';
  info: {
    displayName: 'Afternoon';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
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

export interface AboutWriteUp extends Schema.Component {
  collectionName: 'components_about_write_ups';
  info: {
    displayName: 'Write up';
  };
  attributes: {
    Heading: Attribute.String;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface AboutTeam extends Schema.Component {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Name: Attribute.String;
    Designation: Attribute.String;
    Profile: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    Thumbnail: Attribute.Media<'images'>;
  };
}

export interface AboutTeamSection extends Schema.Component {
  collectionName: 'components_about_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    Heading: Attribute.String;
    Team: Attribute.Component<'about.team', true>;
  };
}

export interface AboutSPSection extends Schema.Component {
  collectionName: 'components_about_s_p_sections';
  info: {
    displayName: 'Strategic Partnership Section';
    description: '';
  };
  attributes: {
    StrategicPartnership: Attribute.Component<'about.s-p-sec', true>;
    Category: Attribute.String;
  };
}

export interface AboutSPSec extends Schema.Component {
  collectionName: 'components_about_s_p_secs';
  info: {
    displayName: 'Strategic Partnership';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media<'images'>;
    Description: Attribute.Text;
    Name: Attribute.String;
    Alt: Attribute.String;
  };
}

export interface AboutQuotes extends Schema.Component {
  collectionName: 'components_about_quotes';
  info: {
    displayName: 'Quotes';
  };
  attributes: {
    Name: Attribute.String;
    Designation: Attribute.String;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Quotes: Attribute.Text;
  };
}

export interface AboutQuotesSection extends Schema.Component {
  collectionName: 'components_about_quotes_sections';
  info: {
    displayName: 'Quotes Section';
  };
  attributes: {
    Heading: Attribute.String;
    QuotesContent: Attribute.Component<'about.quotes', true>;
  };
}

export interface AboutPartnership extends Schema.Component {
  collectionName: 'components_about_partnerships';
  info: {
    displayName: 'Partnership';
  };
  attributes: {
    Heading: Attribute.String;
    Content: Attribute.Text;
    BGImage: Attribute.Media<'images'>;
  };
}

export interface AboutHappy extends Schema.Component {
  collectionName: 'components_about_happies';
  info: {
    displayName: 'Happy';
  };
  attributes: {
    Heading: Attribute.String;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
  };
}

export interface AboutDRSection extends Schema.Component {
  collectionName: 'components_about_d_r_sections';
  info: {
    displayName: 'Download Resources Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Resources: Attribute.Component<'about.d-r-s', true>;
  };
}

export interface AboutDRS extends Schema.Component {
  collectionName: 'components_about_d_r_s';
  info: {
    displayName: 'Download Resources';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    File: Attribute.Media<'files'>;
  };
}

export interface ApplicationSteps extends Schema.Component {
  collectionName: 'components_application_steps';
  info: {
    displayName: 'Steps';
    description: '';
  };
  attributes: {
    StepTitle: Attribute.String;
    StepDescription: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    ApplicationContent: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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
    URL: Attribute.String;
    Color: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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
      'user.uploads': UserUploads;
      'user.support': UserSupport;
      'user.school': UserSchool;
      'user.school-details': UserSchoolDetails;
      'user.research': UserResearch;
      'user.project': UserProject;
      'user.post-application': UserPostApplication;
      'user.poc': UserPoc;
      'user.personal': UserPersonal;
      'user.other': UserOther;
      'user.other-info': UserOtherInfo;
      'user.interview': UserInterview;
      'user.internship': UserInternship;
      'user.guardian2': UserGuardian2;
      'user.guardian1': UserGuardian1;
      'user.guardian-details': UserGuardianDetails;
      'user.course': UserCourse;
      'user.course-com': UserCourseCom;
      'user.contact': UserContact;
      'user.contact-info': UserContactInfo;
      'user.campus': UserCampus;
      'user.address': UserAddress;
      'user.academic-record': UserAcademicRecord;
      'student.skill': StudentSkill;
      'student.science': StudentScience;
      'student.mathematics': StudentMathematics;
      'student.life-skill': StudentLifeSkill;
      'student.g-i-seminar': StudentGISeminar;
      'student.g-i-sem': StudentGISem;
      'student.courses-off': StudentCoursesOff;
      'student.course': StudentCourse;
      'student.course-section': StudentCourseSection;
      'student.course-offered': StudentCourseOffered;
      'student.cmi-seminar': StudentCmiSeminar;
      'student.cmi-sem': StudentCmiSem;
      'student.c-l-module': StudentCLModule;
      'student.c-l-mod': StudentCLMod;
      'seminar.speakers': SeminarSpeakers;
      'seminar.speaker-section': SeminarSpeakerSection;
      'science.tabs': ScienceTabs;
      'science.faculty': ScienceFaculty;
      'science.faculty-mem': ScienceFacultyMem;
      'science.course': ScienceCourse;
      'science.course-section': ScienceCourseSection;
      'maths.faculty-member': MathsFacultyMember;
      'maths.faculty-mem': MathsFacultyMem;
      'maths.course': MathsCourse;
      'maths.course-section': MathsCourseSection;
      'maths.cmi-seminar': MathsCmiSeminar;
      'maths.cmi-sem': MathsCmiSem;
      'life-skill.course': LifeSkillCourse;
      'life-skill.content': LifeSkillContent;
      'learning.module': LearningModule;
      'learning.course': LearningCourse;
      'homepage.stu-section': HomepageStuSection;
      'homepage.st-section': HomepageStSection;
      'homepage.shaping-tomorrow': HomepageShapingTomorrow;
      'homepage.programme-overview': HomepageProgrammeOverview;
      'homepage.po-section': HomepagePoSection;
      'global.top-menu': GlobalTopMenu;
      'global.subquestion': GlobalSubquestion;
      'global.submenu': GlobalSubmenu;
      'global.sublink': GlobalSublink;
      'global.social-media': GlobalSocialMedia;
      'global.seminar': GlobalSeminar;
      'global.programme': GlobalProgramme;
      'global.prog-section': GlobalProgSection;
      'global.po-section': GlobalPoSection;
      'global.p-overview': GlobalPOverview;
      'global.mobile': GlobalMobile;
      'global.meta-details': GlobalMetaDetails;
      'global.learning-module': GlobalLearningModule;
      'global.header': GlobalHeader;
      'global.footer': GlobalFooter;
      'global.footer-4': GlobalFooter4;
      'global.footer-3': GlobalFooter3;
      'global.footer-2': GlobalFooter2;
      'global.footer-1': GlobalFooter1;
      'global.banner-section': GlobalBannerSection;
      'faq.question-answer': FaqQuestionAnswer;
      'faq.faq': FaqFaq;
      'experience.weekends': ExperienceWeekends;
      'experience.trip-section': ExperienceTripSection;
      'experience.testimonial': ExperienceTestimonial;
      'experience.testimonial-section': ExperienceTestimonialSection;
      'experience.success-stories': ExperienceSuccessStories;
      'experience.success-section': ExperienceSuccessSection;
      'experience.schedule-section': ExperienceScheduleSection;
      'experience.recent-trip': ExperienceRecentTrip;
      'experience.old-students': ExperienceOldStudents;
      'experience.noon': ExperienceNoon;
      'experience.new-students': ExperienceNewStudents;
      'experience.morning': ExperienceMorning;
      'experience.evening': ExperienceEvening;
      'experience.campus': ExperienceCampus;
      'experience.campus-life': ExperienceCampusLife;
      'experience.afternoon': ExperienceAfternoon;
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
      'about.write-up': AboutWriteUp;
      'about.team': AboutTeam;
      'about.team-section': AboutTeamSection;
      'about.s-p-section': AboutSPSection;
      'about.s-p-sec': AboutSPSec;
      'about.quotes': AboutQuotes;
      'about.quotes-section': AboutQuotesSection;
      'about.partnership': AboutPartnership;
      'about.happy': AboutHappy;
      'about.d-r-section': AboutDRSection;
      'about.d-r-s': AboutDRS;
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
