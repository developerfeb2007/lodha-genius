import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    singularName: 'slug';
    pluralName: 'slugs';
    displayName: 'slug';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    slug: Attribute.Text;
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    firstName: Attribute.String;
    lastName: Attribute.String;
    countryCode: Attribute.String;
    mobile: Attribute.String & Attribute.Required & Attribute.Unique;
    otp: Attribute.Integer & Attribute.Private;
    SchoolDetails: Attribute.Component<'user.school-details'>;
    AcademicRecord: Attribute.Component<'user.academic-record'>;
    GuardianDetails: Attribute.Component<'user.guardian-details'>;
    PersonalContactDetails: Attribute.Component<'user.personal'>;
    OtherInformation: Attribute.Component<'user.other-info'>;
    Documents: Attribute.Component<'user.uploads'>;
    registrationNumber: Attribute.String & Attribute.Unique;
    ApplicationStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 7;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    TestingStatus: Attribute.Enumeration<
      ['Pending', 'Submitted', 'Approved', 'Rejected']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Pending'>;
    InterviewStatus: Attribute.Enumeration<
      ['Pending', 'Submitted', 'Approved', 'Rejected']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Pending'>;
    PostApplicationStatus: Attribute.Enumeration<
      ['Pending', 'Submitted', 'Approved', 'Rejected']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Pending'>;
    ApplicationStatus: Attribute.Enumeration<
      ['Pending', 'Submitted', 'Approved', 'Rejected']
    >;
    InterviewDetails: Attribute.Component<'user.interview'>;
    PostApplicationAcceptance: Attribute.Component<'user.post-application'>;
    CourseCompletion: Attribute.Component<'user.course-com'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    singularName: 'about-us';
    pluralName: 'about-uses';
    displayName: 'About Us Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    PartnershipSection: Attribute.Component<'about.partnership'>;
    TeamSection: Attribute.Component<'about.team-section'>;
    StrategicPartnershipSection: Attribute.Component<'about.s-p-section'>;
    HappyToHelpSection: Attribute.Component<'about.happy'>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    DownloadResourcesSection: Attribute.Component<'about.d-r-section'>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    QuotesSection: Attribute.Component<'about.quotes-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAnnualIncomeAnnualIncome extends Schema.CollectionType {
  collectionName: 'annual_incomes';
  info: {
    singularName: 'annual-income';
    pluralName: 'annual-incomes';
    displayName: 'Annual Income';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::annual-income.annual-income',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::annual-income.annual-income',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApplicationFormApplicationForm
  extends Schema.CollectionType {
  collectionName: 'application_forms';
  info: {
    singularName: 'application-form';
    pluralName: 'application-forms';
    displayName: 'Application Form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FirstName: Attribute.String;
    LastName: Attribute.String;
    Phone: Attribute.String;
    Email: Attribute.Email;
    City: Attribute.String;
    State: Attribute.String;
    EmailUpdates: Attribute.Boolean;
    UTM: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::application-form.application-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::application-form.application-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApplicationPageApplicationPage extends Schema.SingleType {
  collectionName: 'application_pages';
  info: {
    singularName: 'application-page';
    pluralName: 'application-pages';
    displayName: 'Application Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'application.banner-section'>;
    ContentSection: Attribute.Component<'application.content-section'>;
    ScheduleSection: Attribute.Component<'application.schedule-section'>;
    DocumentsRequiredSection: Attribute.Component<'application.dr-section'>;
    StepsSection: Attribute.Component<'application.steps-section'>;
    AboutAptitudeSection: Attribute.Component<'application.aa-section'>;
    ApplicationFormSection: Attribute.Component<'application.af-section'>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::application-page.application-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::application-page.application-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Slug: Attribute.String;
    PublishedDate: Attribute.Date;
    DesktopBanner: Attribute.Media<'images'>;
    MobileBanner: Attribute.Media<'images'>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogPageBlogPage extends Schema.SingleType {
  collectionName: 'blog_pages';
  info: {
    singularName: 'blog-page';
    pluralName: 'blog-pages';
    displayName: 'Blog Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    MetaDetails: Attribute.Component<'global.meta-details'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClassClass extends Schema.CollectionType {
  collectionName: 'classes';
  info: {
    singularName: 'class';
    pluralName: 'classes';
    displayName: 'Classes';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::class.class',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::class.class',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompletionYearCompletionYear extends Schema.CollectionType {
  collectionName: 'completion_years';
  info: {
    singularName: 'completion-year';
    pluralName: 'completion-years';
    displayName: 'Completion Year';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::completion-year.completion-year',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::completion-year.completion-year',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    singularName: 'course';
    pluralName: 'courses';
    displayName: 'Courses';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['For Grades 9 & 10', 'For Grades 11 & 12']
    >;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Topic: Attribute.String;
    Description: Attribute.Text;
    Faculty: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    File: Attribute.Media<'files' | 'images'>;
    Track: Attribute.Enumeration<['Mathematics', 'Science']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseEnrollmentCourseEnrollment
  extends Schema.CollectionType {
  collectionName: 'course_enrollments';
  info: {
    singularName: 'course-enrollment';
    pluralName: 'course-enrollments';
    displayName: 'Course Enrollment';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course-enrollment.course-enrollment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course-enrollment.course-enrollment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDietryDietry extends Schema.CollectionType {
  collectionName: 'dietries';
  info: {
    singularName: 'dietry';
    pluralName: 'dietries';
    displayName: 'Dietry';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dietry.dietry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dietry.dietry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElectiveElective extends Schema.CollectionType {
  collectionName: 'electives';
  info: {
    singularName: 'elective';
    pluralName: 'electives';
    displayName: 'Elective Subject';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elective.elective',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elective.elective',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExperienceExperience extends Schema.SingleType {
  collectionName: 'experiences';
  info: {
    singularName: 'experience';
    pluralName: 'experiences';
    displayName: 'Experience Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    SuccessStoriesSection: Attribute.Component<
      'experience.success-stories',
      true
    >;
    TestimonialSection: Attribute.Component<'experience.testimonial', true>;
    CampusLifeSection: Attribute.Component<'experience.campus-life'>;
    ScheduleSection: Attribute.Component<'experience.schedule'>;
    RecentTripSection: Attribute.Component<'experience.recent-trip', true>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::experience.experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::experience.experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFacultyFaculty extends Schema.CollectionType {
  collectionName: 'faculties';
  info: {
    singularName: 'faculty';
    pluralName: 'faculties';
    displayName: 'Faculty';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Photo: Attribute.Media<'images'>;
    Alt: Attribute.String;
    Title: Attribute.String;
    Name: Attribute.String;
    Designation: Attribute.String;
    Workplace: Attribute.String;
    Specialist: Attribute.String;
    Profile: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faculty.faculty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faculty.faculty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.SingleType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    FAQSection: Attribute.Component<'faq.faq', true>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFluencyFluency extends Schema.CollectionType {
  collectionName: 'fluencies';
  info: {
    singularName: 'fluency';
    pluralName: 'fluencies';
    displayName: 'English Fluency';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fluency.fluency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fluency.fluency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGenderGender extends Schema.CollectionType {
  collectionName: 'genders';
  info: {
    singularName: 'gender';
    pluralName: 'genders';
    displayName: 'Gender';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gender.gender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gender.gender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    ShapingTomorrowSection: Attribute.Component<'homepage.st-section'>;
    StudentsSection: Attribute.Component<'homepage.stu-section'>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInternshipInternship extends Schema.CollectionType {
  collectionName: 'internships';
  info: {
    singularName: 'internship';
    pluralName: 'internships';
    displayName: 'Internship';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::internship.internship',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::internship.internship',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLanguageLanguage extends Schema.CollectionType {
  collectionName: 'languages';
  info: {
    singularName: 'language';
    pluralName: 'languages';
    displayName: 'Language';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::language.language',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::language.language',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLaptopLaptop extends Schema.CollectionType {
  collectionName: 'laptops';
  info: {
    singularName: 'laptop';
    pluralName: 'laptops';
    displayName: 'Laptop Type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::laptop.laptop',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::laptop.laptop',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLearningLearning extends Schema.SingleType {
  collectionName: 'learnings';
  info: {
    singularName: 'learning';
    pluralName: 'learnings';
    displayName: 'Continued Learning Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    ModuleSection: Attribute.Component<'learning.module', true>;
    CourseSection: Attribute.Component<'learning.course', true>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::learning.learning',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::learning.learning',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLifeSkillLifeSkill extends Schema.SingleType {
  collectionName: 'life_skills';
  info: {
    singularName: 'life-skill';
    pluralName: 'life-skills';
    displayName: 'Life Skill Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    CourseSection: Attribute.Component<'life-skill.course', true>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::life-skill.life-skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::life-skill.life-skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMathMath extends Schema.SingleType {
  collectionName: 'maths';
  info: {
    singularName: 'math';
    pluralName: 'maths';
    displayName: 'Mathematics Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    CMISeminarSection: Attribute.Component<'maths.cmi-seminar'>;
    FacultyMembers: Attribute.Component<'maths.faculty-member'>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    CourseSection: Attribute.Component<'maths.course-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::math.math', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::math.math', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiProfessionProfession extends Schema.CollectionType {
  collectionName: 'professions';
  info: {
    singularName: 'profession';
    pluralName: 'professions';
    displayName: 'Profession';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::profession.profession',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::profession.profession',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgrammeOverviewProgrammeOverview
  extends Schema.SingleType {
  collectionName: 'programme_overviews';
  info: {
    singularName: 'programme-overview';
    pluralName: 'programme-overviews';
    displayName: 'Programme Overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ProgrammeOverviewSection: Attribute.Component<'global.po-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::programme-overview.programme-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::programme-overview.programme-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgrammeSectionProgrammeSection extends Schema.SingleType {
  collectionName: 'programme_sections';
  info: {
    singularName: 'programme-section';
    pluralName: 'programme-sections';
    displayName: 'Programme Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ProgrammeSection: Attribute.Component<'global.prog-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::programme-section.programme-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::programme-section.programme-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRelationRelation extends Schema.CollectionType {
  collectionName: 'relations';
  info: {
    singularName: 'relation';
    pluralName: 'relations';
    displayName: 'Relation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::relation.relation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::relation.relation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResearchResearch extends Schema.CollectionType {
  collectionName: 'researches';
  info: {
    singularName: 'research';
    pluralName: 'researches';
    displayName: 'Research';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::research.research',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::research.research',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSchoolBoardSchoolBoard extends Schema.CollectionType {
  collectionName: 'school_boards';
  info: {
    singularName: 'school-board';
    pluralName: 'school-boards';
    displayName: 'School Board';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::school-board.school-board',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::school-board.school-board',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScienceScience extends Schema.SingleType {
  collectionName: 'sciences';
  info: {
    singularName: 'science';
    pluralName: 'sciences';
    displayName: 'Science Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    FacultyMembers: Attribute.Component<'science.faculty'>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    CourseSection: Attribute.Component<'science.course-section'>;
    Tabs: Attribute.Component<'science.tabs', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::science.science',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::science.science',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeminarSeminar extends Schema.SingleType {
  collectionName: 'seminars';
  info: {
    singularName: 'seminar';
    pluralName: 'seminars';
    displayName: 'Seminar Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    SeminarSection: Attribute.Component<'seminar.seminar', true>;
    SpeakersSection: Attribute.Component<'seminar.speakers', true>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seminar.seminar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seminar.seminar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSizeSize extends Schema.CollectionType {
  collectionName: 'sizes';
  info: {
    singularName: 'size';
    pluralName: 'sizes';
    displayName: 'Clothing Size';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::size.size', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::size.size', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSourceSource extends Schema.CollectionType {
  collectionName: 'sources';
  info: {
    singularName: 'source';
    pluralName: 'sources';
    displayName: 'Sources';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::source.source',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::source.source',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStateCityStateCity extends Schema.SingleType {
  collectionName: 'state_cities';
  info: {
    singularName: 'state-city';
    pluralName: 'state-cities';
    displayName: 'State/City';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Attachment: Attribute.Media<'files'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::state-city.state-city',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::state-city.state-city',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStudentStudent extends Schema.SingleType {
  collectionName: 'students';
  info: {
    singularName: 'student';
    pluralName: 'students';
    displayName: 'For Student Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerSection: Attribute.Component<'global.banner-section', true>;
    GreatIdeasSeminarSection: Attribute.Component<'student.g-i-seminar'>;
    CMISeminarSection: Attribute.Component<'student.cmi-seminar'>;
    LifeSkillSection: Attribute.Component<'student.life-skill'>;
    LearningModuleSection: Attribute.Component<'student.c-l-module'>;
    CoursesOfferedSection: Attribute.Component<'student.course-offered'>;
    MetaDetails: Attribute.Component<'global.meta-details'>;
    CourseSection: Attribute.Component<'student.course-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::student.student',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::student.student',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::annual-income.annual-income': ApiAnnualIncomeAnnualIncome;
      'api::application-form.application-form': ApiApplicationFormApplicationForm;
      'api::application-page.application-page': ApiApplicationPageApplicationPage;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-page.blog-page': ApiBlogPageBlogPage;
      'api::class.class': ApiClassClass;
      'api::completion-year.completion-year': ApiCompletionYearCompletionYear;
      'api::course.course': ApiCourseCourse;
      'api::course-enrollment.course-enrollment': ApiCourseEnrollmentCourseEnrollment;
      'api::dietry.dietry': ApiDietryDietry;
      'api::elective.elective': ApiElectiveElective;
      'api::experience.experience': ApiExperienceExperience;
      'api::faculty.faculty': ApiFacultyFaculty;
      'api::faq.faq': ApiFaqFaq;
      'api::fluency.fluency': ApiFluencyFluency;
      'api::gender.gender': ApiGenderGender;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::internship.internship': ApiInternshipInternship;
      'api::language.language': ApiLanguageLanguage;
      'api::laptop.laptop': ApiLaptopLaptop;
      'api::learning.learning': ApiLearningLearning;
      'api::life-skill.life-skill': ApiLifeSkillLifeSkill;
      'api::math.math': ApiMathMath;
      'api::profession.profession': ApiProfessionProfession;
      'api::programme-overview.programme-overview': ApiProgrammeOverviewProgrammeOverview;
      'api::programme-section.programme-section': ApiProgrammeSectionProgrammeSection;
      'api::project.project': ApiProjectProject;
      'api::relation.relation': ApiRelationRelation;
      'api::research.research': ApiResearchResearch;
      'api::school-board.school-board': ApiSchoolBoardSchoolBoard;
      'api::science.science': ApiScienceScience;
      'api::seminar.seminar': ApiSeminarSeminar;
      'api::size.size': ApiSizeSize;
      'api::source.source': ApiSourceSource;
      'api::state-city.state-city': ApiStateCityStateCity;
      'api::student.student': ApiStudentStudent;
    }
  }
}
