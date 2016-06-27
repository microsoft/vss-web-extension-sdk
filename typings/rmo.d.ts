// Type definitions for Microsoft Visual Studio Services v101.20160627.0902
// Project: https://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference path='vss.d.ts' />
declare module "ReleaseManagement/Core/Constants" {
export module ArtifactDefinitionConstants {
    var ProjectId: string;
    var ConnectionId: string;
    var DefinitionId: string;
    var RepositoryId: string;
    var MappingsId: string;
    var MappingTypeId: string;
    var ServerPathId: string;
    var LocalPathId: string;
}
export module ArtifactTypes {
    var BuildArtifactType: string;
    var JenkinsArtifactType: string;
    var GitHubArtifactType: string;
    var NugetArtifactType: string;
    var TfsOnPremArtifactType: string;
    var ExternalTfsBuildArtifactType: string;
    var GitArtifactType: string;
    var TfvcArtifactType: string;
    var ExternalTfsXamlBuildArtifactType: string;
}
export module RunOptionsConstants {
    var EnvironmentOwnerEmailNotificationValueAlways: string;
    var EnvironmentOwnerEmailNotificationValueTypeOnlyOnFailure: string;
    var EnvironmentOwnerEmailNotificationValueNever: string;
    var EnvironmentOwnerEmailNotificationTypeDefaultValue: string;
    var ReleaseCreator: string;
    var EnvironmentOwner: string;
}
export module WellKnownReleaseVariables {
    var System: string;
    var Build: string;
    var HostTypeValue: string;
    var ReleaseArtifact: string;
    var ReleaseEnvironments: string;
    var AgentReleaseDirectory: string;
    var EnableAccessTokenVariableName: string;
    var HostType: string;
    var ArtifactsDirectory: string;
    var CollectionId: string;
    var TeamProjectId: string;
    var TeamProject: string;
    var ReleaseId: string;
    var SkipArtifactsDownload: string;
    var ReleaseName: string;
    var ReleaseDescription: string;
    var ReleaseDefinitionName: string;
    var ReleaseDefinitionId: string;
    var ReleaseUri: string;
    var ReleaseWebUrl: string;
    var ReleaseEnvironmentUri: string;
    var ReleaseEnvironmentName: string;
    var RequestorId: string;
    var ReleaseRequestedForId: string;
    var AttemptNumber: string;
    var Status: string;
    var ArtifactType: string;
    var DefinitionName: string;
    var DefinitionId: string;
    var DefinitionVersion: string;
    var QueuedBy: string;
    var QueuedById: string;
    var RequestedFor: string;
    var RequestedForId: string;
    var SourceBranch: string;
    var SourceBranchName: string;
    var SourceVersion: string;
    var SourceVersionAuthor: string;
    var SourceVersionMessage: string;
    var SourceTfvcShelveset: string;
    var BuildId: string;
    var BuildUri: string;
    var BuildNumber: string;
    var BuildRepositoryName: string;
    var BuildRepositoryProvider: string;
    var BuildDefinitionId: string;
}
}
declare module "ReleaseManagement/Core/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
export interface AgentArtifactDefinition {
    alias: string;
    artifactType: AgentArtifactType;
    details: string;
    name: string;
    version: string;
}
export enum AgentArtifactType {
    XamlBuild = 0,
    Build = 1,
    Jenkins = 2,
    FileShare = 3,
    Nuget = 4,
    TfsOnPrem = 5,
    GitHub = 6,
    TFGit = 7,
    ExternalTfsBuild = 8,
    Custom = 9,
    Tfvc = 10,
}
export interface ApprovalOptions {
    releaseCreatorCanBeApprover: boolean;
    requiredApproverCount: number;
}
export enum ApprovalStatus {
    Undefined = 0,
    Pending = 1,
    Approved = 2,
    Rejected = 4,
    Reassigned = 6,
    Canceled = 7,
    Skipped = 8,
}
export enum ApprovalType {
    Undefined = 0,
    PreDeploy = 1,
    PostDeploy = 2,
    All = 3,
}
export interface Artifact {
    alias: string;
    definitionReference: {
        [key: string]: ArtifactSourceReference;
    };
    id: number;
    isPrimary: boolean;
    sourceId: string;
    type: string;
}
export interface ArtifactInstanceData {
    accountName: string;
    authenticationToken: string;
    tfsUrl: string;
    version: string;
}
export interface ArtifactMetadata {
    alias: string;
    instanceReference: BuildVersion;
}
export interface ArtifactProvider {
    id: number;
    name: string;
    sourceUri: string;
    version: string;
}
export interface ArtifactSourceId {
    artifactTypeId: string;
    sourceIdInputs: SourceIdInput[];
}
export interface ArtifactSourceIdsQueryResult {
    artifactSourceIds: ArtifactSourceId[];
}
export interface ArtifactSourceReference {
    id: string;
    name: string;
}
export interface ArtifactSourceTrigger extends ReleaseTriggerBase {
    /**
     * Artifact source alias for Artifact Source trigger type
     */
    artifactAlias: string;
}
export interface ArtifactTypeDefinition {
    displayName: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}
export interface ArtifactVersion {
    artifactSourceId: number;
    errorMessage: string;
    sourceId: string;
    versions: BuildVersion[];
}
export interface ArtifactVersionQueryResult {
    artifactVersions: ArtifactVersion[];
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}
export interface BuildVersion {
    id: string;
    name: string;
    sourceBranch: string;
}
/**
 * Represents a change associated with a build.
 */
export interface Change {
    /**
     * The author of the change.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    changeType: string;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri: string;
    /**
     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
     */
    id: string;
    /**
     * The location of the full representation of the resource.
     */
    location: string;
    /**
     * A description of the change. This might be a commit message or changeset description.
     */
    message: string;
    /**
     * A timestamp for the change.
     */
    timestamp: Date;
}
export interface Condition {
    conditionType: ConditionType;
    name: string;
    value: string;
}
export enum ConditionType {
    Undefined = 0,
    Event = 1,
    EnvironmentState = 2,
}
export interface ConfigurationVariableValue {
    isSecret: boolean;
    value: string;
}
export interface Consumer {
    consumerId: number;
    consumerName: string;
}
export interface DeploymentApprovalCompletedEvent {
    approval: ReleaseApproval;
    project: ProjectReference;
    release: Release;
}
export interface DeploymentApprovalPendingEvent {
    approval: ReleaseApproval;
    project: ProjectReference;
    release: Release;
}
export interface DeploymentAttempt {
    attempt: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog: string;
    /**
     * The time at which the deployment started, and null if it has not been deployed yet
     */
    hasStarted: boolean;
    id: number;
    job: ReleaseTask;
    runPlanId: string;
    tasks: ReleaseTask[];
}
export interface DeploymentCompletedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
}
export interface DeploymentStartedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
}
export interface EmailRecipients {
    emailAddresses: string[];
    tfsIds: string[];
}
/**
 * Defines policy on environment queuing at Release Management side queue. We will send to Environment Runner [creating pre-deploy and other steps] only when the policies mentioned are satisfied.
 */
export interface EnvironmentExecutionPolicy {
    /**
     * This policy decides, how many environments would be with Environment Runner.
     */
    concurrencyCount: number;
    /**
     * Queue depth in the EnvironmentQueue table, this table keeps the environment entries till Environment Runner is free [as per it's policy] to take another environment for running.
     */
    queueDepthCount: number;
}
export interface EnvironmentOptions {
    emailNotificationType: string;
    emailRecipients: string;
    enableAccessToken: boolean;
    skipArtifactsDownload: boolean;
    timeoutInMinutes: number;
}
export enum EnvironmentStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    Succeeded = 4,
    Canceled = 8,
    Rejected = 16,
    Queued = 32,
    Scheduled = 64,
}
export enum EnvironmentStatusOld {
    Undefined = 0,
    NotStarted = 1,
    Pending = 2,
    Succeeded = 3,
    Rejected = 4,
    InProgress = 5,
    Canceled = 6,
    Queued = 7,
}
export interface Issue {
    issueType: string;
    message: string;
}
export interface MailMessage {
    body: string;
    cC: EmailRecipients;
    inReplyTo: string;
    messageId: string;
    replyBy: Date;
    replyTo: EmailRecipients;
    sections: MailSectionType[];
    senderType: SenderType;
    subject: string;
    to: EmailRecipients;
}
export enum MailSectionType {
    Details = 0,
    Environments = 1,
    Issues = 2,
    TestResults = 3,
    WorkItems = 4,
    ReleaseInfo = 5,
}
export interface MappingDetails {
    mappings: {
        [key: string]: VSS_FormInput_Contracts.InputValue;
    };
}
export interface ProjectReference {
    id: string;
    name: string;
}
export interface RealtimeReleaseEvent {
    projectId: string;
    releaseId: number;
}
export interface Release {
    artifacts: Artifact[];
    comment: string;
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    definitionSnapshotRevision: number;
    description: string;
    environments: ReleaseEnvironment[];
    id: number;
    keepForever: boolean;
    logsContainerUrl: string;
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    modifiedOn: Date;
    name: string;
    poolName: string;
    reason: ReleaseReason;
    releaseDefinition: ShallowReference;
    releaseNameFormat: string;
    status: ReleaseStatus;
    url: string;
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseAbandonedEvent {
    project: ProjectReference;
    release: Release;
}
export interface ReleaseApproval {
    approvalType: ApprovalType;
    approvedBy: VSS_Common_Contracts.IdentityRef;
    approver: VSS_Common_Contracts.IdentityRef;
    attempt: number;
    comments: string;
    createdOn: Date;
    history: ReleaseApprovalHistory[];
    id: number;
    isAutomated: boolean;
    isNotificationOn: boolean;
    modifiedOn: Date;
    rank: number;
    release: ShallowReference;
    releaseDefinition: ShallowReference;
    releaseEnvironment: ShallowReference;
    revision: number;
    status: ApprovalStatus;
    trialNumber: number;
    url: string;
}
export interface ReleaseApprovalHistory {
    approver: VSS_Common_Contracts.IdentityRef;
    changedBy: VSS_Common_Contracts.IdentityRef;
    comments: string;
    createdOn: Date;
    modifiedOn: Date;
    revision: number;
}
export interface ReleaseApprovalPendingEvent {
    approval: ReleaseApproval;
    definitionName: string;
    environmentId: number;
    environmentName: string;
    environments: ReleaseEnvironment[];
    releaseCreator: string;
    releaseName: string;
    title: string;
    webAccessUri: string;
}
export interface ReleaseArtifact {
    artifactProvider: ArtifactProvider;
    artifactType: string;
    definitionData: string;
    definitionId: number;
    description: string;
    id: number;
    name: string;
    releaseId: number;
}
export interface ReleaseCreatedEvent {
    project: ProjectReference;
    release: Release;
}
export interface ReleaseDefinition {
    artifacts: Artifact[];
    comment: string;
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    environments: ReleaseDefinitionEnvironment[];
    id: number;
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    modifiedOn: Date;
    name: string;
    releaseNameFormat: string;
    retentionPolicy: RetentionPolicy;
    revision: number;
    triggers: ReleaseTriggerBase[];
    url: string;
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseDefinitionApprovals {
    approvalOptions: ApprovalOptions;
    approvals: ReleaseDefinitionApprovalStep[];
}
export interface ReleaseDefinitionApprovalStep extends ReleaseDefinitionEnvironmentStep {
    approver: VSS_Common_Contracts.IdentityRef;
    isAutomated: boolean;
    isNotificationOn: boolean;
    rank: number;
}
export interface ReleaseDefinitionDeployStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * The list of steps for this definition.
     */
    tasks: WorkflowTask[];
}
export interface ReleaseDefinitionEnvironment {
    conditions: Condition[];
    demands: any[];
    deployStep: ReleaseDefinitionDeployStep;
    environmentOptions: EnvironmentOptions;
    executionPolicy: EnvironmentExecutionPolicy;
    id: number;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    postDeployApprovals: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseDefinitionApprovals;
    queueId: number;
    rank: number;
    runOptions: {
        [key: string]: string;
    };
    schedules: ReleaseSchedule[];
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseDefinitionEnvironmentStep {
    id: number;
}
export interface ReleaseDefinitionEnvironmentSummary {
    id: number;
    lastReleases: ShallowReference[];
    name: string;
}
export interface ReleaseDefinitionEnvironmentTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    environment: ReleaseDefinitionEnvironment;
    iconTaskId: string;
    id: string;
    name: string;
}
export enum ReleaseDefinitionExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Triggers = 8,
}
export interface ReleaseDefinitionRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    definitionId: number;
    definitionUrl: string;
    revision: number;
}
export interface ReleaseDefinitionSummary {
    environments: ReleaseDefinitionEnvironmentSummary[];
    releaseDefinition: ShallowReference;
    releases: Release[];
}
export interface ReleaseEnvironment {
    conditions: Condition[];
    createdOn: Date;
    definitionEnvironmentId: number;
    demands: any[];
    deploySteps: DeploymentAttempt[];
    environmentOptions: EnvironmentOptions;
    id: number;
    modifiedOn: Date;
    name: string;
    nextScheduledUtcTime: Date;
    owner: VSS_Common_Contracts.IdentityRef;
    postApprovalsSnapshot: ReleaseDefinitionApprovals;
    postDeployApprovals: ReleaseApproval[];
    preApprovalsSnapshot: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseApproval[];
    queueId: number;
    rank: number;
    release: ShallowReference;
    releaseCreatedBy: VSS_Common_Contracts.IdentityRef;
    releaseDefinition: ShallowReference;
    releaseDescription: string;
    releaseId: number;
    runOptions: {
        [key: string]: string;
    };
    scheduledDeploymentTime: Date;
    schedules: ReleaseSchedule[];
    status: EnvironmentStatus;
    timeToDeploy: number;
    triggerReason: string;
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
    workflowTasks: WorkflowTask[];
}
export interface ReleaseEnvironmentCompletedEvent {
    createdByName: string;
    definitionId: number;
    definitionName: string;
    environment: ReleaseEnvironment;
    environmentId: number;
    projectName: string;
    releaseCreatedBy: VSS_Common_Contracts.IdentityRef;
    releaseLogsUri: string;
    releaseName: string;
    status: string;
    title: string;
    webAccessUri: string;
}
export interface ReleaseEnvironmentUpdateMetadata {
    comment: string;
    scheduledDeploymentTime: Date;
    status: EnvironmentStatus;
}
export enum ReleaseExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Approvals = 8,
}
export enum ReleaseManagementSecurityPermissions {
    None = 0,
    ViewReleaseDefinition = 1,
    EditReleaseDefinition = 2,
    DeleteReleaseDefinition = 4,
    ManageReleaseApprovers = 8,
    ManageReleases = 16,
    ViewReleases = 32,
    CreateReleases = 64,
    EditReleaseEnvironment = 128,
    DeleteReleaseEnvironment = 256,
    AdministerReleasePermissions = 512,
    DeleteReleases = 1024,
    ManageDeployments = 2048,
}
export enum ReleaseQueryOrder {
    Descending = 0,
    Ascending = 1,
}
export enum ReleaseReason {
    None = 0,
    Manual = 1,
    ContinuousIntegration = 2,
    Schedule = 3,
}
export interface ReleaseRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeDetails: string;
    changeType: string;
    comment: string;
    definitionSnapshotRevision: number;
    releaseId: number;
}
export interface ReleaseSchedule {
    /**
     * Days of the week to release
     */
    daysToRelease: ScheduleDays;
    /**
     * Team Foundation Job Definition Job Id
     */
    jobId: string;
    /**
     * Local time zone hour to start
     */
    startHours: number;
    /**
     * Local time zone minute to start
     */
    startMinutes: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'
     */
    timeZoneId: string;
}
export interface ReleaseStartMetadata {
    artifacts: ArtifactMetadata[];
    definitionId: number;
    description: string;
    isDraft: boolean;
    manualEnvironments: string[];
    reason: ReleaseReason;
}
export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    Active = 2,
    Abandoned = 4,
}
export enum ReleaseStatusOld {
    Undefined = 0,
    Draft = 1,
    Abandoned = 2,
    Active = 3,
}
export interface ReleaseTask {
    agentName: string;
    dateEnded: Date;
    dateStarted: Date;
    finishTime: Date;
    id: number;
    issues: Issue[];
    lineCount: number;
    logUrl: string;
    name: string;
    rank: number;
    startTime: Date;
    status: TaskStatus;
    timelineRecordId: string;
}
export interface ReleaseTaskLogUpdatedEvent extends RealtimeReleaseEvent {
    environmentId: number;
    lines: string[];
    timelineRecordId: string;
}
export interface ReleaseTasksUpdatedEvent extends RealtimeReleaseEvent {
    environmentId: number;
    job: ReleaseTask;
    releaseDeployPhaseId: number;
    releaseStepId: number;
    tasks: ReleaseTask[];
}
export interface ReleaseTriggerBase {
    triggerType: ReleaseTriggerType;
}
export enum ReleaseTriggerType {
    Undefined = 0,
    ArtifactSource = 1,
    Schedule = 2,
}
export interface ReleaseUpdatedEvent extends RealtimeReleaseEvent {
    release: Release;
}
export interface ReleaseUpdateMetadata {
    comment: string;
    keepForever: boolean;
    manualEnvironments: string[];
    status: ReleaseStatus;
}
export interface ReleaseWorkItemRef {
    id: string;
    url: string;
}
export interface RetentionPolicy {
    daysToKeep: number;
}
export enum ScheduleDays {
    None = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 4,
    Thursday = 8,
    Friday = 16,
    Saturday = 32,
    Sunday = 64,
    All = 127,
}
export interface ScheduledReleaseTrigger extends ReleaseTriggerBase {
    /**
     * Release schedule for Scheduled Release trigger type
     */
    schedule: ReleaseSchedule;
}
export enum SenderType {
    ServiceAccount = 1,
    RequestingUser = 2,
}
export interface ShallowReference {
    id: number;
    name: string;
    url: string;
}
export interface SourceIdInput {
    id: string;
    name: string;
}
export interface SummaryMailSection {
    htmlContent: string;
    rank: number;
    sectionType: MailSectionType;
    title: string;
}
export enum TaskStatus {
    Unknown = 0,
    Pending = 1,
    InProgress = 2,
    Success = 3,
    Failure = 4,
    Canceled = 5,
    Skipped = 6,
    Succeeded = 7,
    Failed = 8,
}
export interface TimeZone {
    displayName: string;
    id: string;
}
export interface TimeZoneList {
    utcTimeZone: TimeZone;
    validTimeZones: TimeZone[];
}
export interface WorkflowTask {
    alwaysRun: boolean;
    continueOnError: boolean;
    definitionType: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    name: string;
    taskId: string;
    version: string;
}
export var TypeInfo: {
    AgentArtifactDefinition: {
        fields: any;
    };
    AgentArtifactType: {
        enumValues: {
            "xamlBuild": number;
            "build": number;
            "jenkins": number;
            "fileShare": number;
            "nuget": number;
            "tfsOnPrem": number;
            "gitHub": number;
            "tFGit": number;
            "externalTfsBuild": number;
            "custom": number;
            "tfvc": number;
        };
    };
    ApprovalOptions: {
        fields: any;
    };
    ApprovalStatus: {
        enumValues: {
            "undefined": number;
            "pending": number;
            "approved": number;
            "rejected": number;
            "reassigned": number;
            "canceled": number;
            "skipped": number;
        };
    };
    ApprovalType: {
        enumValues: {
            "undefined": number;
            "preDeploy": number;
            "postDeploy": number;
            "all": number;
        };
    };
    Artifact: {
        fields: any;
    };
    ArtifactInstanceData: {
        fields: any;
    };
    ArtifactMetadata: {
        fields: any;
    };
    ArtifactProvider: {
        fields: any;
    };
    ArtifactSourceId: {
        fields: any;
    };
    ArtifactSourceIdsQueryResult: {
        fields: any;
    };
    ArtifactSourceReference: {
        fields: any;
    };
    ArtifactSourceTrigger: {
        fields: any;
    };
    ArtifactTypeDefinition: {
        fields: any;
    };
    ArtifactVersion: {
        fields: any;
    };
    ArtifactVersionQueryResult: {
        fields: any;
    };
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
        };
    };
    BuildVersion: {
        fields: any;
    };
    Change: {
        fields: any;
    };
    Condition: {
        fields: any;
    };
    ConditionType: {
        enumValues: {
            "undefined": number;
            "event": number;
            "environmentState": number;
        };
    };
    ConfigurationVariableValue: {
        fields: any;
    };
    Consumer: {
        fields: any;
    };
    DeploymentApprovalCompletedEvent: {
        fields: any;
    };
    DeploymentApprovalPendingEvent: {
        fields: any;
    };
    DeploymentAttempt: {
        fields: any;
    };
    DeploymentCompletedEvent: {
        fields: any;
    };
    DeploymentStartedEvent: {
        fields: any;
    };
    EmailRecipients: {
        fields: any;
    };
    EnvironmentExecutionPolicy: {
        fields: any;
    };
    EnvironmentOptions: {
        fields: any;
    };
    EnvironmentStatus: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "inProgress": number;
            "succeeded": number;
            "canceled": number;
            "rejected": number;
            "queued": number;
            "scheduled": number;
        };
    };
    EnvironmentStatusOld: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "pending": number;
            "succeeded": number;
            "rejected": number;
            "inProgress": number;
            "canceled": number;
            "queued": number;
        };
    };
    Issue: {
        fields: any;
    };
    MailMessage: {
        fields: any;
    };
    MailSectionType: {
        enumValues: {
            "details": number;
            "environments": number;
            "issues": number;
            "testResults": number;
            "workItems": number;
            "releaseInfo": number;
        };
    };
    MappingDetails: {
        fields: any;
    };
    ProjectReference: {
        fields: any;
    };
    RealtimeReleaseEvent: {
        fields: any;
    };
    Release: {
        fields: any;
    };
    ReleaseAbandonedEvent: {
        fields: any;
    };
    ReleaseApproval: {
        fields: any;
    };
    ReleaseApprovalHistory: {
        fields: any;
    };
    ReleaseApprovalPendingEvent: {
        fields: any;
    };
    ReleaseArtifact: {
        fields: any;
    };
    ReleaseCreatedEvent: {
        fields: any;
    };
    ReleaseDefinition: {
        fields: any;
    };
    ReleaseDefinitionApprovals: {
        fields: any;
    };
    ReleaseDefinitionApprovalStep: {
        fields: any;
    };
    ReleaseDefinitionDeployStep: {
        fields: any;
    };
    ReleaseDefinitionEnvironment: {
        fields: any;
    };
    ReleaseDefinitionEnvironmentStep: {
        fields: any;
    };
    ReleaseDefinitionEnvironmentSummary: {
        fields: any;
    };
    ReleaseDefinitionEnvironmentTemplate: {
        fields: any;
    };
    ReleaseDefinitionExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "triggers": number;
        };
    };
    ReleaseDefinitionRevision: {
        fields: any;
    };
    ReleaseDefinitionSummary: {
        fields: any;
    };
    ReleaseEnvironment: {
        fields: any;
    };
    ReleaseEnvironmentCompletedEvent: {
        fields: any;
    };
    ReleaseEnvironmentUpdateMetadata: {
        fields: any;
    };
    ReleaseExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "approvals": number;
        };
    };
    ReleaseManagementSecurityPermissions: {
        enumValues: {
            "none": number;
            "viewReleaseDefinition": number;
            "editReleaseDefinition": number;
            "deleteReleaseDefinition": number;
            "manageReleaseApprovers": number;
            "manageReleases": number;
            "viewReleases": number;
            "createReleases": number;
            "editReleaseEnvironment": number;
            "deleteReleaseEnvironment": number;
            "administerReleasePermissions": number;
            "deleteReleases": number;
            "manageDeployments": number;
        };
    };
    ReleaseQueryOrder: {
        enumValues: {
            "descending": number;
            "ascending": number;
        };
    };
    ReleaseReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "continuousIntegration": number;
            "schedule": number;
        };
    };
    ReleaseRevision: {
        fields: any;
    };
    ReleaseSchedule: {
        fields: any;
    };
    ReleaseStartMetadata: {
        fields: any;
    };
    ReleaseStatus: {
        enumValues: {
            "undefined": number;
            "draft": number;
            "active": number;
            "abandoned": number;
        };
    };
    ReleaseStatusOld: {
        enumValues: {
            "undefined": number;
            "draft": number;
            "abandoned": number;
            "active": number;
        };
    };
    ReleaseTask: {
        fields: any;
    };
    ReleaseTaskLogUpdatedEvent: {
        fields: any;
    };
    ReleaseTasksUpdatedEvent: {
        fields: any;
    };
    ReleaseTriggerBase: {
        fields: any;
    };
    ReleaseTriggerType: {
        enumValues: {
            "undefined": number;
            "artifactSource": number;
            "schedule": number;
        };
    };
    ReleaseUpdatedEvent: {
        fields: any;
    };
    ReleaseUpdateMetadata: {
        fields: any;
    };
    ReleaseWorkItemRef: {
        fields: any;
    };
    RetentionPolicy: {
        fields: any;
    };
    ScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    ScheduledReleaseTrigger: {
        fields: any;
    };
    SenderType: {
        enumValues: {
            "serviceAccount": number;
            "requestingUser": number;
        };
    };
    ShallowReference: {
        fields: any;
    };
    SourceIdInput: {
        fields: any;
    };
    SummaryMailSection: {
        fields: any;
    };
    TaskStatus: {
        enumValues: {
            "unknown": number;
            "pending": number;
            "inProgress": number;
            "success": number;
            "failure": number;
            "canceled": number;
            "skipped": number;
            "succeeded": number;
            "failed": number;
        };
    };
    TimeZone: {
        fields: any;
    };
    TimeZoneList: {
        fields: any;
    };
    WorkflowTask: {
        fields: any;
    };
};
}
declare module "ReleaseManagement/Core/ExtensionContracts" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
/**
* The type of object to be used when contributing a link. linkId field will be used as an argument to onLickClicked callback.
*/
export interface IContributionHtmlLink {
    linkId: string;
    onLinkClicked: (linkId: string) => void;
}
export interface IContributionHtmlSpanData {
    text: string;
    foregroundColor: string;
    link: IContributionHtmlLink;
}
/**
* The type of object to be used when contributing a hypertext string with link.
*/
export interface IContributionHtmlData {
    spanItems: IContributionHtmlSpanData[];
}
/**
* Interface defining the configuration that is shared between extension targeted at "ms.vss-releaseManagement-web.release-details-view" and the host
*/
export interface IReleaseViewExtensionConfig {
    /**
    * Required if reacting to the current release.
    * More than one callbacks can be added, and all will be called.
    * It is important to have atleast one call back, since that's how an extension can get information about the current release.
    */
    onReleaseChanged: (handler: (release: RMContracts.Release) => void) => void;
    /**
    * Optional, If needed, this callback will be called when this particular extension is selected/displayed
    */
    onViewDisplayed: (onDisplayedCallBack: () => void) => void;
    /**
    * Optional, for a given tab id, which can be contribution id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string) => void;
}
export interface IReleaseEnvironmentsSummaryDataExtension {
    /**
    * Required if reacting to the current release. RM will call this function whenever it paints environments summary section for a given release.
    */
    onReleaseChanged: (release: RMContracts.Release) => IPromise<{
        [environmentId: number]: IContributionHtmlData;
    }>;
}
export interface IReleaseEnvironmentsSummaryDataExtensionConfig {
    /**
    * Optional, for a given tab id, which is essentially contribution id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string, additionalUrlParams?: {
        [key: string]: string;
    }) => void;
}
}
declare module "ReleaseManagement/Core/RestClient" {
import Contracts = require("ReleaseManagement/Core/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected agentartifactsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns the artifact details that automation agent requires
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.AgentArtifactDefinition[]>
     */
    getAgentArtifactDefinitions(project: string, releaseId: number): IPromise<Contracts.AgentArtifactDefinition[]>;
}
export class CommonMethods2_2To3 extends CommonMethods2To3 {
    protected approvalsApiVersion: string;
    protected approvalsApiVersion_250c7158: string;
    protected approvalsApiVersion_9328e074: string;
    protected changesApiVersion: string;
    protected definitionsApiVersion: string;
    protected environmentsApiVersion: string;
    protected environmenttemplatesApiVersion: string;
    protected historyApiVersion: string;
    protected inputvaluesqueryApiVersion: string;
    protected logsApiVersion: string;
    protected logsApiVersion_c37fbab5: string;
    protected releasesApiVersion: string;
    protected revisionsApiVersion: string;
    protected sendmailApiVersion: string;
    protected sourcesApiVersion: string;
    protected tasksApiVersion: string;
    protected typesApiVersion: string;
    protected versionsApiVersion: string;
    protected workitemsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @return IPromise<Contracts.ReleaseWorkItemRef[]>
     */
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number): IPromise<Contracts.ReleaseWorkItemRef[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Artifact[]} artifacts
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ArtifactVersionQueryResult>
     */
    getArtifactVersionsForSources(artifacts: Contracts.Artifact[], project: string): IPromise<Contracts.ArtifactVersionQueryResult>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<Contracts.ArtifactVersionQueryResult>
     */
    getArtifactVersions(project: string, releaseDefinitionId: number): IPromise<Contracts.ArtifactVersionQueryResult>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ArtifactTypeDefinition[]>
     */
    getArtifactTypeDefinitions(project: string): IPromise<Contracts.ArtifactTypeDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} typeId
     * @return IPromise<Contracts.ArtifactSourceIdsQueryResult>
     */
    getArtifactsSources(project: string, typeId?: string): IPromise<Contracts.ArtifactSourceIdsQueryResult>;
    /**
     * [Preview API]
     *
     * @param {Contracts.MailMessage} mailMessage
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<void>
     */
    sendSummaryMail(mailMessage: Contracts.MailMessage, project: string, releaseId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.SummaryMailSection[]>
     */
    getSummaryMailSections(project: string, releaseId: number): IPromise<Contracts.SummaryMailSection[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     * @return IPromise<string>
     */
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<Contracts.ReleaseDefinitionRevision[]>
     */
    getReleaseDefinitionHistory(project: string, definitionId: number): IPromise<Contracts.ReleaseDefinitionRevision[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseUpdateMetadata} releaseUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.Release>
     */
    updateReleaseResource(releaseUpdateMetadata: Contracts.ReleaseUpdateMetadata, project: string, releaseId: number): IPromise<Contracts.Release>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Release} release
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.Release>
     */
    updateRelease(release: Contracts.Release, project: string, releaseId: number): IPromise<Contracts.Release>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} searchText
     * @param {string} createdBy
     * @param {Contracts.ReleaseStatus} statusFilter
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime
     * @param {Date} maxCreatedTime
     * @param {Contracts.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param {Contracts.ReleaseExpands} expand
     * @param {string} artifactTypeId
     * @param {string} sourceId
     * @param {string} artifactVersionId
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string): IPromise<Contracts.Release[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} definitionSnapshotRevision
     * @return IPromise<string>
     */
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} releaseCount
     * @param {boolean} includeArtifact
     * @return IPromise<Contracts.ReleaseDefinitionSummary>
     */
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean): IPromise<Contracts.ReleaseDefinitionSummary>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {boolean} includeAllApprovals
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean): IPromise<Contracts.Release>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<void>
     */
    deleteRelease(project: string, releaseId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseStartMetadata} releaseStartMetadata
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Release>
     */
    createRelease(releaseStartMetadata: Contracts.ReleaseStartMetadata, project: string): IPromise<Contracts.Release>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} taskId
     * @param {number} attemptId
     * @return IPromise<string>
     */
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<ArrayBuffer>
     */
    getLogs(project: string, releaseId: number): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {VSS_FormInput_Contracts.InputValuesQuery} query
     * @param {string} project - Project ID or project name
     * @return IPromise<VSS_FormInput_Contracts.InputValuesQuery>
     */
    getInputValues(query: VSS_FormInput_Contracts.InputValuesQuery, project: string): IPromise<VSS_FormInput_Contracts.InputValuesQuery>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.ReleaseRevision[]>
     */
    getReleaseHistory(project: string, releaseId: number): IPromise<Contracts.ReleaseRevision[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate[]>
     */
    listDefinitionEnvironmentTemplates(project: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    getDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseDefinitionEnvironmentTemplate} template
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    createDefinitionEnvironmentTemplate(template: Contracts.ReleaseDefinitionEnvironmentTemplate, project: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseEnvironmentUpdateMetadata} environmentUpdateData
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @return IPromise<Contracts.ReleaseEnvironment>
     */
    updateReleaseEnvironment(environmentUpdateData: Contracts.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): IPromise<Contracts.ReleaseEnvironment>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @return IPromise<Contracts.ReleaseEnvironment>
     */
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): IPromise<Contracts.ReleaseEnvironment>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    updateReleaseDefinition(releaseDefinition: Contracts.ReleaseDefinition, project: string): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @param {Contracts.ReleaseDefinitionExpands} expand
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitionsForArtifactSource(project: string, artifactType: string, artifactSourceId: string, expand?: Contracts.ReleaseDefinitionExpands): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText
     * @param {Contracts.ReleaseDefinitionExpands} expand
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<void>
     */
    deleteReleaseDefinition(project: string, definitionId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    createReleaseDefinition(releaseDefinition: Contracts.ReleaseDefinition, project: string): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @return IPromise<Contracts.Change[]>
     */
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter
     * @param {Contracts.ApprovalStatus} statusFilter
     * @param {number[]} releaseIdsFilter
     * @param {Contracts.ApprovalType} typeFilter
     * @param {number} top
     * @param {number} continuationToken
     * @param {Contracts.ReleaseQueryOrder} queryOrder
     * @param {boolean} includeMyGroupApprovals
     * @return IPromise<Contracts.ReleaseApproval[]>
     */
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: Contracts.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: Contracts.ApprovalType, top?: number, continuationToken?: number, queryOrder?: Contracts.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): IPromise<Contracts.ReleaseApproval[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseApproval} approval
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     * @return IPromise<Contracts.ReleaseApproval>
     */
    updateReleaseApproval(approval: Contracts.ReleaseApproval, project: string, approvalId: number): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     * @param {boolean} includeHistory
     * @return IPromise<Contracts.ReleaseApproval>
     */
    getApproval(project: string, approvalId: number, includeHistory?: boolean): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId
     * @return IPromise<Contracts.ReleaseApproval>
     */
    getApprovalHistory(project: string, approvalStepId: number): IPromise<Contracts.ReleaseApproval>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3 extends CommonMethods2_2To3 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_2 extends CommonMethods2_2To3 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class ReleaseHttpClient extends ReleaseHttpClient3 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return ReleaseHttpClient2_2
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): ReleaseHttpClient2_2;
}
declare module "ReleaseManagement/Core/Utils" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
export class ReleaseEnvironmentStatusHelper {
    static isEnvironmentCompleted(environment: RMContracts.ReleaseEnvironment): boolean;
}
}
