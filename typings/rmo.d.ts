// Type definitions for Microsoft Visual Studio Services v109.20161208.1538
// Project: https://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference path='vss.d.ts' />
declare module "ReleaseManagement/Core/Constants" {
export module ArtifactDefinitionConstants {
    var ProjectId: string;
    var ConnectionId: string;
    var ConnectionName: string;
    var DefinitionId: string;
    var DefaultVersionTypeId: string;
    var DefaultVersionBranchId: string;
    var DefaultVersionTagsId: string;
    var DefaultVersionSpecificId: string;
    var LatestType: string;
    var LatestFromBranchType: string;
    var LatestWithBranchAndTagsType: string;
    var SpecificVersionType: string;
    var SelectDuringReleaseCreationType: string;
    var RepositoryId: string;
    var BranchId: string;
    var MappingsId: string;
    var MappingTypeId: string;
    var ServerPathId: string;
    var LocalPathId: string;
    var ArtifactId: string;
    var ItemPath: string;
    var Version: string;
    var ArtifactSourceVersionUrl: string;
    var ArtifactSourceDefinitionUrl: string;
    var ArtifactItems: string;
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
export module FavoriteItemKeys {
    var ReleaseDefinitionId: string;
    var RestEndpointUrl: string;
    var WebEndpointUrl: string;
}
export module FavoriteItemNames {
    var ReleaseDefinitionItemName: string;
}
export module FavoriteItemTypes {
    var ReleaseDefinitionTypeName: string;
}
export module FavoritesScopeNames {
    var ReleaseDefinitionScopeName: string;
}
export module RunOptionsConstants {
    var EnvironmentOwnerEmailNotificationValueAlways: string;
    var EnvironmentOwnerEmailNotificationValueTypeOnlyOnFailure: string;
    var EnvironmentOwnerEmailNotificationValueNever: string;
    var EnvironmentOwnerEmailNotificationTypeDefaultValue: string;
    var ReleaseCreator: string;
    var EnvironmentOwner: string;
}
export module WellKnownExtendedReleaseVariables {
    var ReleaseArtifacts: string;
    var ReleaseEnvironments: string;
}
export module WellKnownMetrics {
    var SuccessfulDeployments: string;
    var FailedDeployments: string;
    var PartiallySuccessfulDeployments: string;
}
export module WellKnownReleaseVariables {
    var System: string;
    var Build: string;
    var HostTypeValue: string;
    var DeploymentHostType: string;
    var ReleaseArtifact: string;
    var ReleaseEnvironments: string;
    var AgentReleaseDirectory: string;
    var EnableAccessTokenVariableName: string;
    var HostType: string;
    var ArtifactsDirectory: string;
    var CollectionId: string;
    var TeamProjectId: string;
    var TeamProject: string;
    var TotalJobsInPhase: string;
    var JobPositionInPhase: string;
    var ParallelExecutionType: string;
    var ReleaseId: string;
    var SkipArtifactsDownload: string;
    var ReleaseName: string;
    var ReleaseDescription: string;
    var ReleaseDefinitionName: string;
    var ReleaseDefinitionId: string;
    var ReleaseDefinitionEnvironmentId: string;
    var DeploymentId: string;
    var ReleaseUri: string;
    var ReleaseWebUrl: string;
    var ReleaseEnvironmentUri: string;
    var ReleaseEnvironmentId: string;
    var ReleaseEnvironmentName: string;
    var ReleaseDeployPhaseId: string;
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
export interface AgentBasedDeployPhase extends DeployPhase {
    deploymentInput: AgentDeploymentInput;
}
export interface AgentDeploymentInput extends DeploymentInput {
    parallelExecution: ExecutionInput;
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
    isPrimary: boolean;
    sourceId: string;
    type: string;
}
export interface ArtifactContributionDefinition {
    artifactType: string;
    artifactTypeStreamMapping: {
        [key: string]: string;
    };
    browsableArtifactTypeMapping: {
        [key: string]: string;
    };
    dataSourceBindings: DataSourceBinding[];
    displayName: string;
    downloadTaskId: string;
    endpointTypeId: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}
export interface ArtifactFilter {
    sourceBranch: string;
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
    triggerConditions: ArtifactFilter[];
}
export interface ArtifactTypeDefinition {
    displayName: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}
export interface ArtifactVersion {
    alias: string;
    defaultVersion: BuildVersion;
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
export interface BaseDeploymentInput {
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
    Artifact = 4,
}
export interface ConfigurationVariableValue {
    isSecret: boolean;
    value: string;
}
export interface Consumer {
    consumerId: number;
    consumerName: string;
}
export interface ContinuousDeploymentAppServicePlanConfiguration {
    appServicePlan: string;
    appServicePlanName: string;
    appServicePricingTier: string;
}
export interface ContinuousDeploymentSetupData {
    branch: string;
    projectId: string;
    repoId: string;
    resourceGroup: string;
    slotConfiguration: ContinuousDeploymentSlotConfiguration;
    sourceConfiguration: ContinuousDeploymentSourceConfiguration;
    subscriptionId: string;
    subscriptionName: string;
    tenantId: string;
    testWebAppConfiguration: ContinuousDeploymentTestWebAppConfiguration;
    webAppName: string;
    webAppProjectType: ContinuousDeploymentWebAppProjectType;
}
export interface ContinuousDeploymentSlotConfiguration {
    slotName: string;
    webAppLocation: string;
}
export interface ContinuousDeploymentSourceConfiguration {
    branch: string;
    sourceRepository: SourceRepository;
}
export interface ContinuousDeploymentTestWebAppConfiguration {
    appServicePlanConfiguration: ContinuousDeploymentAppServicePlanConfiguration;
    testWebAppLocation: string;
    testWebAppName: string;
}
export enum ContinuousDeploymentWebAppProjectType {
    AspNetWap = 0,
    AspNetCore = 1,
    NodeJS = 2,
}
export interface ControlOptions {
    alwaysRun: boolean;
    continueOnError: boolean;
    enabled: boolean;
}
export interface DataSourceBinding {
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    parameters: {
        [key: string]: string;
    };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}
export interface DefinitionEnvironmentReference {
    definitionEnvironmentId: number;
    releaseDefinitionId: number;
}
export interface Deployment {
    attempt: number;
    conditions: Condition[];
    definitionEnvironmentId: number;
    deploymentStatus: DeploymentStatus;
    id: number;
    lastModifiedBy: VSS_Common_Contracts.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    postDeployApprovals: ReleaseApproval[];
    preDeployApprovals: ReleaseApproval[];
    reason: DeploymentReason;
    release: ReleaseReference;
    releaseDefinition: ShallowReference;
    releaseEnvironment: ShallowReference;
    requestedBy: VSS_Common_Contracts.IdentityRef;
    scheduledDeploymentTime: Date;
    startedOn: Date;
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
    deploymentId: number;
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
    lastModifiedBy: VSS_Common_Contracts.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    queuedOn: Date;
    reason: DeploymentReason;
    releaseDeployPhases: ReleaseDeployPhase[];
    requestedBy: VSS_Common_Contracts.IdentityRef;
    runPlanId: string;
    status: DeploymentStatus;
    tasks: ReleaseTask[];
}
export interface DeploymentCompletedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
}
export interface DeploymentInput extends BaseDeploymentInput {
    demands: any[];
    enableAccessToken: boolean;
    queueId: number;
    skipArtifactsDownload: boolean;
    timeoutInMinutes: number;
}
export interface DeploymentJob {
    job: ReleaseTask;
    tasks: ReleaseTask[];
}
export enum DeploymentOperationStatus {
    Undefined = 0,
    Queued = 1,
    Scheduled = 2,
    Pending = 4,
    Approved = 8,
    Rejected = 16,
    Deferred = 32,
    QueuedForAgent = 64,
    PhaseInProgress = 128,
    PhaseSucceeded = 256,
    PhasePartiallySucceeded = 512,
    PhaseFailed = 1024,
    Canceled = 2048,
    PhaseCanceled = 4096,
    ManualInterventionPending = 8192,
}
export interface DeploymentQueryParameters {
    artifactSourceId: string;
    artifactTypeId: string;
    artifactVersions: string[];
    deploymentStatus: DeploymentStatus;
    environments: DefinitionEnvironmentReference[];
    isDeleted: boolean;
    latestDeploymentsOnly: boolean;
    maxDeploymentsPerEnvironment: number;
    maxModifiedTime: Date;
    minModifiedTime: Date;
    operationStatus: DeploymentOperationStatus;
    queryOrder: ReleaseQueryOrder;
}
export enum DeploymentReason {
    None = 0,
    Manual = 1,
    Automated = 2,
    Scheduled = 4,
}
export interface DeploymentStartedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
}
export enum DeploymentStatus {
    Undefined = 0,
    NotDeployed = 1,
    InProgress = 2,
    Succeeded = 4,
    PartiallySucceeded = 8,
    Failed = 16,
}
export interface DeployPhase {
    name: string;
    phaseType: DeployPhaseTypes;
    rank: number;
    workflowTasks: WorkflowTask[];
}
export enum DeployPhaseStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    PartiallySucceeded = 4,
    Succeeded = 8,
    Failed = 16,
    Canceled = 32,
    Skipped = 64,
}
export enum DeployPhaseTypes {
    Undefined = 0,
    AgentBasedDeployment = 1,
    RunOnServer = 2,
    MachineGroupBasedDeployment = 4,
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
export interface EnvironmentRetentionPolicy {
    daysToKeep: number;
    releasesToKeep: number;
    retainBuild: boolean;
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
    PartiallySucceeded = 128,
}
export interface ExecutionInput {
    parallelExecutionType: ParallelExecutionTypes;
}
/**
 * Class to represent favorite entry
 */
export interface FavoriteItem {
    /**
     * Application specific data for the entry
     */
    data: string;
    /**
     * Unique Id of the the entry
     */
    id: string;
    /**
     * Display text for favorite entry
     */
    name: string;
    /**
     * Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder
     */
    type: string;
}
export interface Issue {
    issueType: string;
    message: string;
}
export interface MachineGroupBasedDeployPhase extends DeployPhase {
    deploymentInput: MachineGroupDeploymentInput;
}
export interface MachineGroupDeploymentInput extends DeploymentInput {
    healthPercent: number;
    tags: string[];
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
export interface ManualIntervention {
    approver: VSS_Common_Contracts.IdentityRef;
    comments: string;
    createdOn: Date;
    id: number;
    instructions: string;
    modifiedOn: Date;
    name: string;
    release: ShallowReference;
    releaseDefinition: ShallowReference;
    releaseEnvironment: ShallowReference;
    status: ManualInterventionStatus;
    taskInstanceId: string;
    url: string;
}
export enum ManualInterventionStatus {
    Unknown = 0,
    Pending = 1,
    Rejected = 2,
    Approved = 4,
    Canceled = 8,
}
export interface ManualInterventionUpdateMetadata {
    comment: string;
    status: ManualInterventionStatus;
}
export interface MappingDetails {
    mappings: {
        [key: string]: VSS_FormInput_Contracts.InputValue;
    };
}
export interface Metric {
    name: string;
    value: number;
}
export interface MultiConfigInput extends ParallelExecutionInputBase {
    multipliers: string;
}
export interface MultiMachineInput extends ParallelExecutionInputBase {
}
export interface ParallelExecutionInputBase extends ExecutionInput {
    continueOnError: boolean;
    maxNumberOfAgents: number;
}
export enum ParallelExecutionTypes {
    None = 0,
    MultiConfiguration = 1,
    MultiMachine = 2,
}
export interface ProjectReference {
    id: string;
    name: string;
}
export interface PropertySelector {
    properties: string[];
    selectorType: PropertySelectorType;
}
export enum PropertySelectorType {
    Inclusion = 0,
    Exclusion = 1,
}
export interface QueuedReleaseData {
    projectId: string;
    queuePosition: number;
    releaseId: number;
}
export interface RealtimeReleaseEvent {
    projectId: string;
    releaseId: number;
}
export interface Release {
    _links: any;
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
    projectReference: ProjectReference;
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
    _links: any;
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
    deployPhases: DeployPhase[];
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
    retentionPolicy: EnvironmentRetentionPolicy;
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
export enum ReleaseDefinitionQueryOrder {
    IdAscending = 0,
    IdDescending = 1,
    NameAscending = 2,
    NameDescending = 3,
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
export interface ReleaseDeployPhase {
    deploymentJobs: DeploymentJob[];
    errorLog: string;
    id: number;
    manualInterventions: ManualIntervention[];
    phaseType: DeployPhaseTypes;
    rank: number;
    runPlanId: string;
    status: DeployPhaseStatus;
}
export interface ReleaseEnvironment {
    conditions: Condition[];
    createdOn: Date;
    definitionEnvironmentId: number;
    demands: any[];
    deployPhasesSnapshot: DeployPhase[];
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
    conditions: Condition[];
    createdByName: string;
    definitionId: number;
    definitionName: string;
    environment: ReleaseEnvironment;
    environmentId: number;
    projectName: string;
    reason: DeploymentReason;
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
    ManualInterventions = 16,
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
export interface ReleaseReference {
    artifacts: Artifact[];
    id: number;
    name: string;
    url: string;
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
export interface ReleaseSettings {
    retentionSettings: RetentionSettings;
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
export interface RetentionSettings {
    daysToKeepDeletedReleases: number;
    defaultEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
    maximumEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
}
export interface RunOnServerDeployPhase extends DeployPhase {
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
    _links: any;
    id: number;
    name: string;
    url: string;
}
export interface SourceIdInput {
    id: string;
    name: string;
}
export interface SourceRepository {
    endpointIdentifier: string;
    identifier: string;
    repositoryType: SourceRepositoryType;
}
export enum SourceRepositoryType {
    Invalid = 0,
    VstsGit = 1,
    GitHub = 2,
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
    PartiallySucceeded = 9,
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
    timeoutInMinutes: number;
    version: string;
}
export var TypeInfo: {
    AgentArtifactDefinition: any;
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
    AgentBasedDeployPhase: any;
    AgentDeploymentInput: any;
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
    ArtifactContributionDefinition: any;
    ArtifactSourceTrigger: any;
    ArtifactTypeDefinition: any;
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
        };
    };
    Change: any;
    Condition: any;
    ConditionType: {
        enumValues: {
            "undefined": number;
            "event": number;
            "environmentState": number;
            "artifact": number;
        };
    };
    ContinuousDeploymentSetupData: any;
    ContinuousDeploymentSourceConfiguration: any;
    ContinuousDeploymentWebAppProjectType: {
        enumValues: {
            "aspNetWap": number;
            "aspNetCore": number;
            "nodeJS": number;
        };
    };
    Deployment: any;
    DeploymentApprovalCompletedEvent: any;
    DeploymentApprovalPendingEvent: any;
    DeploymentAttempt: any;
    DeploymentCompletedEvent: any;
    DeploymentJob: any;
    DeploymentOperationStatus: {
        enumValues: {
            "undefined": number;
            "queued": number;
            "scheduled": number;
            "pending": number;
            "approved": number;
            "rejected": number;
            "deferred": number;
            "queuedForAgent": number;
            "phaseInProgress": number;
            "phaseSucceeded": number;
            "phasePartiallySucceeded": number;
            "phaseFailed": number;
            "canceled": number;
            "phaseCanceled": number;
            "manualInterventionPending": number;
        };
    };
    DeploymentQueryParameters: any;
    DeploymentReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "automated": number;
            "scheduled": number;
        };
    };
    DeploymentStartedEvent: any;
    DeploymentStatus: {
        enumValues: {
            "undefined": number;
            "notDeployed": number;
            "inProgress": number;
            "succeeded": number;
            "partiallySucceeded": number;
            "failed": number;
        };
    };
    DeployPhase: any;
    DeployPhaseStatus: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "inProgress": number;
            "partiallySucceeded": number;
            "succeeded": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
        };
    };
    DeployPhaseTypes: {
        enumValues: {
            "undefined": number;
            "agentBasedDeployment": number;
            "runOnServer": number;
            "machineGroupBasedDeployment": number;
        };
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
            "partiallySucceeded": number;
        };
    };
    ExecutionInput: any;
    MachineGroupBasedDeployPhase: any;
    MailMessage: any;
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
    ManualIntervention: any;
    ManualInterventionStatus: {
        enumValues: {
            "unknown": number;
            "pending": number;
            "rejected": number;
            "approved": number;
            "canceled": number;
        };
    };
    ManualInterventionUpdateMetadata: any;
    MultiConfigInput: any;
    MultiMachineInput: any;
    ParallelExecutionInputBase: any;
    ParallelExecutionTypes: {
        enumValues: {
            "none": number;
            "multiConfiguration": number;
            "multiMachine": number;
        };
    };
    PropertySelector: any;
    PropertySelectorType: {
        enumValues: {
            "inclusion": number;
            "exclusion": number;
        };
    };
    Release: any;
    ReleaseAbandonedEvent: any;
    ReleaseApproval: any;
    ReleaseApprovalHistory: any;
    ReleaseApprovalPendingEvent: any;
    ReleaseCreatedEvent: any;
    ReleaseDefinition: any;
    ReleaseDefinitionEnvironment: any;
    ReleaseDefinitionEnvironmentTemplate: any;
    ReleaseDefinitionExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "triggers": number;
        };
    };
    ReleaseDefinitionQueryOrder: {
        enumValues: {
            "idAscending": number;
            "idDescending": number;
            "nameAscending": number;
            "nameDescending": number;
        };
    };
    ReleaseDefinitionRevision: any;
    ReleaseDefinitionSummary: any;
    ReleaseDeployPhase: any;
    ReleaseEnvironment: any;
    ReleaseEnvironmentCompletedEvent: any;
    ReleaseEnvironmentUpdateMetadata: any;
    ReleaseExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "approvals": number;
            "manualInterventions": number;
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
    ReleaseRevision: any;
    ReleaseSchedule: any;
    ReleaseStartMetadata: any;
    ReleaseStatus: {
        enumValues: {
            "undefined": number;
            "draft": number;
            "active": number;
            "abandoned": number;
        };
    };
    ReleaseTask: any;
    ReleaseTasksUpdatedEvent: any;
    ReleaseTriggerBase: any;
    ReleaseTriggerType: {
        enumValues: {
            "undefined": number;
            "artifactSource": number;
            "schedule": number;
        };
    };
    ReleaseUpdatedEvent: any;
    ReleaseUpdateMetadata: any;
    RunOnServerDeployPhase: any;
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
    ScheduledReleaseTrigger: any;
    SenderType: {
        enumValues: {
            "serviceAccount": number;
            "requestingUser": number;
        };
    };
    SourceRepository: any;
    SourceRepositoryType: {
        enumValues: {
            "invalid": number;
            "vstsGit": number;
            "gitHub": number;
        };
    };
    SummaryMailSection: any;
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
            "partiallySucceeded": number;
        };
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
export interface IDeploymentWidgetDataExtension {
    /**
    * Deployment widget will call this function whenever it tries to render/refresh the widget view.
    * As the amount of data being fetched is too huge, we need to batch it.
    * Calling triggerFetchData will only start the process of fetching required data in batches.
    * The extension will be calling updateContributionData as and when it has finished fetching results for one of the batches.
    */
    triggerFetchingContributionData: (releaseEnvironments: {
        releaseId: number;
        environmentId: number;
    }[]) => void;
}
export interface IDeploymentWidgetDataExtensionConfig {
    /**
    * The extension will be calling this as and when it has finished fetching results for one of the batches.
    */
    updateContributionData: (overlayData: IDeploymentWidgetOverlayData[]) => void;
}
/**
    * releaseEnvironmentReference -> release and environment to which the test results belong to.
    * data: Contains value of the overlay metric
    * toolTipData: KeyValuePair -> These details will be added to the tool-tip shown on hover
    * targetUrl: The url to navigate to on clicking the overlayData.
*/
export interface IDeploymentWidgetOverlayData {
    releaseEnvironmentReference: IReleaseEnvironmentReference;
    data: string;
    targetUrl: string;
    toolTipData: string[];
}
export interface IReleaseEnvironmentReference {
    releaseId: number;
    environmentId: number;
}
}
declare module "ReleaseManagement/Core/RestClient" {
import Contracts = require("ReleaseManagement/Core/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
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
export class CommonMethods2_2To3_1 extends CommonMethods2To3_1 {
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
    protected logsApiVersion_e71ba1ed: string;
    protected releasesApiVersion: string;
    protected revisionsApiVersion: string;
    protected sendmailApiVersion: string;
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
     * @return IPromise<Contracts.ReleaseDefinitionRevision[]>
     */
    getReleaseDefinitionHistory(project: string, definitionId: number): IPromise<Contracts.ReleaseDefinitionRevision[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     * @return IPromise<string>
     */
    getDefinitionRevision(project: string, definitionId: number, revision: number): IPromise<string>;
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
     * @param {number[]} definitionEnvironmentIdsFilter
     * @return IPromise<Contracts.ReleaseDefinitionSummary>
     */
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean, definitionEnvironmentIdsFilter?: number[]): IPromise<Contracts.ReleaseDefinitionSummary>;
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
     * @param {string} comment
     * @return IPromise<void>
     */
    deleteRelease(project: string, releaseId: number, comment?: string): IPromise<void>;
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
     * @return IPromise<ArrayBuffer>
     */
    getLogs(project: string, releaseId: number): IPromise<ArrayBuffer>;
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
     * @param {number} top
     * @param {string} continuationToken
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder): IPromise<Contracts.ReleaseDefinition[]>;
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
export class CommonMethods3To3_1 extends CommonMethods2_2To3_1 {
    protected continuousDeploymentApiVersion: string;
    protected deploymentsApiVersion: string;
    protected logsApiVersion_17c91af7: string;
    protected manualInterventionsApiVersion: string;
    protected releasesApiVersion: string;
    protected releasesettingsApiVersion: string;
    protected sourcebranchesApiVersion: string;
    protected tasksApiVersion_4259191d: string;
    protected throttlingQueueApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns throttled queue as per the task hub license of parallel releases
     *
     * @param {string} projectId
     * @param {number} releaseId
     * @return IPromise<Contracts.QueuedReleaseData[]>
     */
    getQueuedReleases(projectId?: string, releaseId?: number): IPromise<Contracts.QueuedReleaseData[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} releaseDeployPhaseId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<string[]>
     */
    getSourceBranches(project: string, definitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Updates the release settings
     *
     * @param {Contracts.ReleaseSettings} releaseSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseSettings>
     */
    updateReleaseSettings(releaseSettings: Contracts.ReleaseSettings, project: string): IPromise<Contracts.ReleaseSettings>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseSettings>
     */
    getReleaseSettings(project: string): IPromise<Contracts.ReleaseSettings>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} comment
     * @return IPromise<void>
     */
    undeleteRelease(project: string, releaseId: number, comment: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ManualInterventionUpdateMetadata} manualInterventionUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     * @return IPromise<Contracts.ManualIntervention>
     */
    updateManualIntervention(manualInterventionUpdateMetadata: Contracts.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): IPromise<Contracts.ManualIntervention>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.ManualIntervention[]>
     */
    getManualInterventions(project: string, releaseId: number): IPromise<Contracts.ManualIntervention[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     * @return IPromise<Contracts.ManualIntervention>
     */
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): IPromise<Contracts.ManualIntervention>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} releaseDeployPhaseId
     * @param {number} taskId
     * @return IPromise<string>
     */
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentQueryParameters} queryParameters
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Deployment[]>
     */
    getDeploymentsForMultipleEnvironments(queryParameters: Contracts.DeploymentQueryParameters, project: string): IPromise<Contracts.Deployment[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} createdBy
     * @param {Date} minModifiedTime
     * @param {Date} maxModifiedTime
     * @param {Contracts.DeploymentStatus} deploymentStatus
     * @param {Contracts.DeploymentOperationStatus} operationStatus
     * @param {boolean} latestAttemptsOnly
     * @param {Contracts.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @return IPromise<Contracts.Deployment[]>
     */
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, minModifiedTime?: Date, maxModifiedTime?: Date, deploymentStatus?: Contracts.DeploymentStatus, operationStatus?: Contracts.DeploymentOperationStatus, latestAttemptsOnly?: boolean, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number): IPromise<Contracts.Deployment[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ContinuousDeploymentSetupData} configData
     * @param {string} project - Project ID or project name
     * @return IPromise<string>
     */
    setupContinuousDeployment(configData: Contracts.ContinuousDeploymentSetupData, project: string): IPromise<string>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.FavoriteItem[]} favoriteItems
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @return IPromise<Contracts.FavoriteItem[]>
     */
    createFavorites(favoriteItems: Contracts.FavoriteItem[], project: string, scope: string, identityId?: string): IPromise<Contracts.FavoriteItem[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @param {string} favoriteItemIds
     * @return IPromise<void>
     */
    deleteFavorites(project: string, scope: string, identityId?: string, favoriteItemIds?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @return IPromise<Contracts.FavoriteItem[]>
     */
    getFavorites(project: string, scope: string, identityId?: string): IPromise<Contracts.FavoriteItem[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Date} minMetricsTime
     * @return IPromise<Contracts.Metric[]>
     */
    getMetrics(project: string, minMetricsTime?: Date): IPromise<Contracts.Metric[]>;
    /**
     * [Preview API]
     *
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @return IPromise<Contracts.ProjectReference[]>
     */
    getReleaseProjects(artifactType: string, artifactSourceId: string): IPromise<Contracts.ProjectReference[]>;
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
     * @param {string} sourceBranchFilter
     * @param {boolean} isDeleted
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project?: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
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
     * @param {string} sourceBranchFilter
     * @param {boolean} isDeleted
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_3 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
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
     * @param {string} sourceBranchFilter
     * @param {boolean} isDeleted
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_2 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
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
     * @param {string} sourceBranchFilter
     * @param {boolean} isDeleted
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class ReleaseHttpClient extends ReleaseHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return ReleaseHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): ReleaseHttpClient3;
}
declare module "ReleaseManagement/Core/Utils" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
export class ReleaseEnvironmentStatusHelper {
    static isEnvironmentCompleted(environment: RMContracts.ReleaseEnvironment): boolean;
}
}
