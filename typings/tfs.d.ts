// Type definitions for Microsoft Visual Studio Services v109.20161208.1538
// Project: https://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference path='vss.d.ts' />
declare module "TFS/Build/Contracts" {
import DistributedTask_Common = require("TFS/DistributedTaskCommon/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AgentPoolQueue extends ShallowReference {
    _links: any;
    /**
     * The pool used by this queue.
     */
    pool: TaskAgentPoolReference;
}
export enum AgentStatus {
    /**
     * Indicates that the build agent cannot be contacted.
     */
    Unavailable = 0,
    /**
     * Indicates that the build agent is currently available.
     */
    Available = 1,
    /**
     * Indicates that the build agent has taken itself offline.
     */
    Offline = 2,
}
export interface ArtifactResource {
    _links: any;
    /**
     * The type-specific resource data. For example, "#/10002/5/drop", "$/drops/5", "\\myshare\myfolder\mydrops\5"
     */
    data: string;
    /**
     * Link to the resource. This might include things like query parameters to download as a zip file
     */
    downloadUrl: string;
    /**
     * Properties of Artifact Resource
     */
    properties: {
        [key: string]: string;
    };
    /**
     * The type of the resource: File container, version control folder, UNC path, etc.
     */
    type: string;
    /**
     * Link to the resource
     */
    url: string;
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}
/**
 * Data representation of a build
 */
export interface Build {
    _links: any;
    /**
     * Build number/name of the build
     */
    buildNumber: string;
    /**
     * Build number revision
     */
    buildNumberRevision: number;
    /**
     * The build controller. This should only be set if the definition type is Xaml.
     */
    controller: BuildController;
    /**
     * The definition associated with the build
     */
    definition: DefinitionReference;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted: boolean;
    /**
     * Process or person that deleted the build
     */
    deletedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Date the build was deleted
     */
    deletedDate: Date;
    /**
     * Description of how the build was deleted
     */
    deletedReason: string;
    /**
     * Demands
     */
    demands: any[];
    /**
     * Time that the build was completed
     */
    finishTime: Date;
    /**
     * Id of the build
     */
    id: number;
    keepForever: boolean;
    /**
     * Process or person that last changed the build
     */
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Date the build was last changed
     */
    lastChangedDate: Date;
    /**
     * Log location of the build
     */
    logs: BuildLogReference;
    /**
     * Orchestration plan for the build
     */
    orchestrationPlan: TaskOrchestrationPlanReference;
    /**
     * Parameters for the build
     */
    parameters: string;
    /**
     * Orchestration plans associated with the build (build, cleanup)
     */
    plans: TaskOrchestrationPlanReference[];
    /**
     * The build's priority
     */
    priority: QueuePriority;
    /**
     * The team project
     */
    project: TFS_Core_Contracts.TeamProjectReference;
    properties: any;
    /**
     * Quality of the xaml build (good, bad, etc.)
     */
    quality: string;
    /**
     * The queue. This should only be set if the definition type is Build.
     */
    queue: AgentPoolQueue;
    /**
     * Queue option of the build.
     */
    queueOptions: QueueOptions;
    /**
     * The current position of the build in the queue
     */
    queuePosition: number;
    /**
     * Time that the build was queued
     */
    queueTime: Date;
    /**
     * Reason that the build was created
     */
    reason: BuildReason;
    /**
     * The repository
     */
    repository: BuildRepository;
    /**
     * The identity that queued the build
     */
    requestedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The identity on whose behalf the build was queued
     */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
     * The build result
     */
    result: BuildResult;
    /**
     * Specifies if Build should be retained by Release
     */
    retainedByRelease: boolean;
    /**
     * Source branch
     */
    sourceBranch: string;
    /**
     * Source version
     */
    sourceVersion: string;
    /**
     * Time that the build was started
     */
    startTime: Date;
    /**
     * Status of the build
     */
    status: BuildStatus;
    tags: string[];
    /**
     * Uri of the build
     */
    uri: string;
    /**
     * REST url of the build
     */
    url: string;
    validationResults: BuildRequestValidationResult[];
}
export interface BuildAgent {
    buildDirectory: string;
    controller: ShallowReference;
    createdDate: Date;
    description: string;
    enabled: boolean;
    id: number;
    messageQueueUrl: string;
    name: string;
    reservedForBuild: string;
    server: ShallowReference;
    status: AgentStatus;
    statusMessage: string;
    updatedDate: Date;
    uri: string;
    url: string;
}
export interface BuildArtifact {
    /**
     * The artifact id
     */
    id: number;
    /**
     * The name of the artifact
     */
    name: string;
    /**
     * The actual resource
     */
    resource: ArtifactResource;
}
export interface BuildArtifactAddedEvent extends BuildUpdatedEvent {
    artifact: BuildArtifact;
}
export enum BuildAuthorizationScope {
    /**
     * The identity used should have build service account permissions scoped to the project collection. This is useful when resources for a single build are spread across multiple projects.
     */
    ProjectCollection = 1,
    /**
     * The identity used should have build service account permissions scoped to the project in which the build definition resides. This is useful for isolation of build jobs to a particular team project to avoid any unintentional escalation of privilege attacks during a build.
     */
    Project = 2,
}
/**
 * Data representation of a build badge
 */
export interface BuildBadge {
    /**
     * Build id, if exists that this badge corresponds to
     */
    buildId: number;
    /**
     * Self Url that generates SVG
     */
    imageUrl: string;
}
export interface BuildChangesCalculatedEvent extends BuildUpdatedEvent {
    changes: Change[];
}
export interface BuildCompletedEvent extends BuildUpdatedEvent {
}
export interface BuildController extends ShallowReference {
    _links: any;
    /**
     * The date the controller was created.
     */
    createdDate: Date;
    /**
     * The description of the controller.
     */
    description: string;
    /**
     * Indicates whether the controller is enabled.
     */
    enabled: boolean;
    /**
     * The status of the controller.
     */
    status: ControllerStatus;
    /**
     * The date the controller was last updated.
     */
    updatedDate: Date;
    /**
     * The controller's URI.
     */
    uri: string;
}
export interface BuildDefinition extends BuildDefinitionReference {
    /**
     * Indicates whether badges are enabled for this definition
     */
    badgeEnabled: boolean;
    build: BuildDefinitionStep[];
    /**
     * The build number format
     */
    buildNumberFormat: string;
    /**
     * The comment entered when saving the definition
     */
    comment: string;
    demands: any[];
    /**
     * The description
     */
    description: string;
    /**
     * The drop location for the definition
     */
    dropLocation: string;
    /**
     * Gets or sets the job authorization scope for builds which are queued against this definition
     */
    jobAuthorizationScope: BuildAuthorizationScope;
    /**
     * Gets or sets the job execution timeout in minutes for builds which are queued against this definition
     */
    jobTimeoutInMinutes: number;
    options: BuildOption[];
    /**
     * Process Parameters
     */
    processParameters: DistributedTask_Common.ProcessParameters;
    properties: any;
    /**
     * The repository
     */
    repository: BuildRepository;
    retentionRules: RetentionPolicy[];
    tags: string[];
    triggers: BuildTrigger[];
    variables: {
        [key: string]: BuildDefinitionVariable;
    };
}
export interface BuildDefinitionChangedEvent {
    changeType: AuditAction;
    definition: BuildDefinition;
}
export interface BuildDefinitionChangingEvent {
    changeType: AuditAction;
    newDefinition: BuildDefinition;
    originalDefinition: BuildDefinition;
}
export interface BuildDefinitionReference extends DefinitionReference {
    _links: any;
    /**
     * The author of the definition.
     */
    authoredBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The default branch of this definition
     */
    defaultBranch: string;
    /**
     * If this is a draft definition, it might have a parent
     */
    draftOf: DefinitionReference;
    metrics: BuildMetric[];
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality: DefinitionQuality;
    /**
     * The default queue which should be used for requests.
     */
    queue: AgentPoolQueue;
}
export interface BuildDefinitionRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    definitionUrl: string;
    name: string;
    revision: number;
}
export interface BuildDefinitionSourceProvider {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * fields associated with this build definition
     */
    fields: {
        [key: string]: string;
    };
    /**
     * Id of this source provider
     */
    id: number;
    /**
     * The lst time this source provider was modified
     */
    lastModified: Date;
    /**
     * Name of the source provider
     */
    name: string;
    /**
     * Which trigger types are supported by this definition source provider
     */
    supportedTriggerTypes: DefinitionTriggerType;
}
export interface BuildDefinitionStep {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    task: TaskDefinitionReference;
    timeoutInMinutes: number;
}
export interface BuildDefinitionTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    icons: {
        [key: string]: string;
    };
    iconTaskId: string;
    id: string;
    name: string;
    template: BuildDefinition;
}
export interface BuildDefinitionVariable {
    allowOverride: boolean;
    isSecret: boolean;
    value: string;
}
export interface BuildDeletedEvent extends RealtimeBuildEvent {
    build: Build;
}
export interface BuildDeployment {
    deployment: BuildSummary;
    sourceBuild: ShallowReference;
}
export interface BuildDestroyedEvent extends RealtimeBuildEvent {
    build: Build;
}
/**
 * Represents a build log.
 */
export interface BuildLog extends BuildLogReference {
    /**
     * The date the log was created.
     */
    createdOn: Date;
    /**
     * The date the log was last changed.
     */
    lastChangedOn: Date;
    /**
     * The number of lines in the log.
     */
    lineCount: number;
}
/**
 * Data representation of a build log reference
 */
export interface BuildLogReference {
    /**
     * The id of the log.
     */
    id: number;
    /**
     * The type of the log location.
     */
    type: string;
    /**
     * Full link to the log resource.
     */
    url: string;
}
export interface BuildMetric {
    /**
     * Scoped date of the metric
     */
    date: Date;
    /**
     * The int value of the metric
     */
    intValue: number;
    /**
     * The name of the metric
     */
    name: string;
    /**
     * The scope of the metric
     */
    scope: string;
}
export interface BuildOption {
    definition: BuildOptionDefinitionReference;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
}
export interface BuildOptionDefinition extends BuildOptionDefinitionReference {
    description: string;
    groups: BuildOptionGroupDefinition[];
    inputs: BuildOptionInputDefinition[];
    name: string;
    ordinal: number;
}
export interface BuildOptionDefinitionReference {
    id: string;
}
export interface BuildOptionGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
}
export interface BuildOptionInputDefinition {
    defaultValue: string;
    groupName: string;
    help: {
        [key: string]: string;
    };
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    required: boolean;
    type: BuildOptionInputType;
    visibleRule: string;
}
export enum BuildOptionInputType {
    String = 0,
    Boolean = 1,
    StringList = 2,
    Radio = 3,
    PickList = 4,
    MultiLine = 5,
}
export enum BuildPhaseStatus {
    /**
     * The state is not known.
     */
    Unknown = 0,
    /**
     * The build phase completed unsuccessfully.
     */
    Failed = 1,
    /**
     * The build phase completed successfully.
     */
    Succeeded = 2,
}
export interface BuildPollingSummaryEvent {
}
export interface BuildProcessTemplate {
    description: string;
    fileExists: boolean;
    id: number;
    parameters: string;
    serverPath: string;
    supportedReasons: BuildReason;
    teamProject: string;
    templateType: ProcessTemplateType;
    url: string;
    version: string;
}
export enum BuildQueryOrder {
    /**
     * Order by finish time ascending.
     */
    FinishTimeAscending = 2,
    /**
     * Order by finish time descending.
     */
    FinishTimeDescending = 3,
}
export interface BuildQueuedEvent extends BuildUpdatedEvent {
}
export enum BuildReason {
    /**
     * No reason. This value should not be used.
     */
    None = 0,
    /**
     * The build was started manually.
     */
    Manual = 1,
    /**
     * The build was started for the trigger TriggerType.ContinuousIntegration.
     */
    IndividualCI = 2,
    /**
     * The build was started for the trigger TriggerType.BatchedContinuousIntegration.
     */
    BatchedCI = 4,
    /**
     * The build was started for the trigger TriggerType.Schedule.
     */
    Schedule = 8,
    /**
     * The build was created by a user.
     */
    UserCreated = 32,
    /**
     * The build was started manually for private validation.
     */
    ValidateShelveset = 64,
    /**
     * The build was started for the trigger ContinuousIntegrationType.Gated.
     */
    CheckInShelveset = 128,
    /**
     * The build was started by a pull request. Added in resource version 3.
     */
    PullRequest = 256,
    /**
     * The build was triggered for retention policy purposes.
     */
    Triggered = 431,
    /**
     * All reasons.
     */
    All = 495,
}
export interface BuildReference {
    _links: any;
    /**
     * Build number/name of the build
     */
    buildNumber: string;
    /**
     * Time that the build was completed
     */
    finishTime: Date;
    /**
     * Id of the build
     */
    id: number;
    /**
     * Time that the build was queued
     */
    queueTime: Date;
    /**
     * The identity on whose behalf the build was queued
     */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
     * The build result
     */
    result: BuildResult;
    /**
     * Time that the build was started
     */
    startTime: Date;
    /**
     * Status of the build
     */
    status: BuildStatus;
}
export interface BuildReportMetadata {
    buildId: number;
    content: string;
    type: string;
}
export interface BuildRepository {
    checkoutSubmodules: boolean;
    /**
     * Indicates whether to clean the target folder when getting code from the repository. This is a String so that it can reference variables.
     */
    clean: string;
    /**
     * Gets or sets the name of the default branch.
     */
    defaultBranch: string;
    id: string;
    /**
     * Gets or sets the friendly name of the repository.
     */
    name: string;
    properties: {
        [key: string]: string;
    };
    /**
     * Gets or sets the root folder.
     */
    rootFolder: string;
    /**
     * Gets or sets the type of the repository.
     */
    type: string;
    /**
     * Gets or sets the url of the repository.
     */
    url: string;
}
export interface BuildRequestValidationResult {
    message: string;
    result: ValidationResult;
}
export interface BuildResourceUsage {
    distributedTaskAgents: number;
    paidPrivateAgentSlots: number;
    totalUsage: number;
    xamlControllers: number;
}
export enum BuildResult {
    /**
     * No result
     */
    None = 0,
    /**
     * The build completed successfully.
     */
    Succeeded = 2,
    /**
     * The build completed compilation successfully but had other errors.
     */
    PartiallySucceeded = 4,
    /**
     * The build completed unsuccessfully.
     */
    Failed = 8,
    /**
     * The build was canceled before starting.
     */
    Canceled = 32,
}
export interface BuildServer {
    agents: ShallowReference[];
    controller: ShallowReference;
    id: number;
    isVirtual: boolean;
    messageQueueUrl: string;
    name: string;
    requireClientCertificates: boolean;
    status: ServiceHostStatus;
    statusChangedDate: Date;
    uri: string;
    url: string;
    version: number;
}
export interface BuildSettings {
    daysToKeepDeletedBuildsBeforeDestroy: number;
    defaultRetentionPolicy: RetentionPolicy;
    maximumRetentionPolicy: RetentionPolicy;
}
export interface BuildStartedEvent extends BuildUpdatedEvent {
}
export enum BuildStatus {
    /**
     * No status.
     */
    None = 0,
    /**
     * The build is currently in progress.
     */
    InProgress = 1,
    /**
     * The build has completed.
     */
    Completed = 2,
    /**
     * The build is cancelling
     */
    Cancelling = 4,
    /**
     * The build is inactive in the queue.
     */
    Postponed = 8,
    /**
     * The build has not yet started.
     */
    NotStarted = 32,
    /**
     * All status.
     */
    All = 47,
}
export interface BuildSummary {
    build: ShallowReference;
    finishTime: Date;
    keepForever: boolean;
    quality: string;
    reason: BuildReason;
    requestedFor: VSS_Common_Contracts.IdentityRef;
    startTime: Date;
    status: BuildStatus;
}
export interface BuildTrigger {
    triggerType: DefinitionTriggerType;
}
export interface BuildUpdatedEvent extends RealtimeBuildEvent {
    build: Build;
}
export interface BuildWorkspace {
    mappings: MappingDetails[];
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
     * Indicates whether the message was truncated
     */
    messageTruncated: boolean;
    /**
     * A timestamp for the change.
     */
    timestamp: Date;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    type: string;
}
export interface ConsoleLogEvent extends RealtimeBuildEvent {
    lines: string[];
    timelineId: string;
    timelineRecordId: string;
}
export interface ContinuousDeploymentDefinition {
    /**
     * The connected service associated with the continuous deployment
     */
    connectedService: TFS_Core_Contracts.WebApiConnectedServiceRef;
    /**
     * The definition associated with the continuous deployment
     */
    definition: ShallowReference;
    gitBranch: string;
    hostedServiceName: string;
    project: TFS_Core_Contracts.TeamProjectReference;
    repositoryId: string;
    storageAccountName: string;
    subscriptionId: string;
    website: string;
    webspace: string;
}
export interface ContinuousIntegrationTrigger extends BuildTrigger {
    batchChanges: boolean;
    branchFilters: string[];
    maxConcurrentBuildsPerBranch: number;
    pathFilters: string[];
    /**
     * The polling interval in seconds.
     */
    pollingInterval: number;
    /**
     * This is the id of the polling job that polls the external repository.  Once the build definition is saved/updated, this value is set.
     */
    pollingJobId: string;
}
export enum ControllerStatus {
    /**
     * Indicates that the build controller cannot be contacted.
     */
    Unavailable = 0,
    /**
     * Indicates that the build controller is currently available.
     */
    Available = 1,
    /**
     * Indicates that the build controller has taken itself offline.
     */
    Offline = 2,
}
export enum DefinitionQuality {
    Definition = 1,
    Draft = 2,
}
export enum DefinitionQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by created on/last modified time ascending.
     */
    LastModifiedAscending = 1,
    /**
     * Order by created on/last modified time descending.
     */
    LastModifiedDescending = 2,
    /**
     * Order by definition name ascending.
     */
    DefinitionNameAscending = 3,
    /**
     * Order by definition name descending.
     */
    DefinitionNameDescending = 4,
}
export enum DefinitionQueueStatus {
    /**
     * When enabled the definition queue allows builds to be queued by users, the system will queue scheduled, gated and continuous integration builds, and the queued builds will be started by the system.
     */
    Enabled = 0,
    /**
     * When paused the definition queue allows builds to be queued by users and the system will queue scheduled, gated and continuous integration builds. Builds in the queue will not be started by the system.
     */
    Paused = 1,
    /**
     * When disabled the definition queue will not allow builds to be queued by users and the system will not queue scheduled, gated or continuous integration builds. Builds already in the queue will not be started by the system.
     */
    Disabled = 2,
}
/**
 * A reference to a definition.
 */
export interface DefinitionReference extends ShallowReference {
    /**
     * The date the definition was created
     */
    createdDate: Date;
    /**
     * The path this definitions belongs to
     */
    path: string;
    /**
     * The project.
     */
    project: TFS_Core_Contracts.TeamProjectReference;
    /**
     * If builds can be queued from this definition
     */
    queueStatus: DefinitionQueueStatus;
    /**
     * The definition revision number.
     */
    revision: number;
    /**
     * The type of the definition.
     */
    type: DefinitionType;
    /**
     * The Uri of the definition
     */
    uri: string;
}
export enum DefinitionTriggerType {
    /**
     * Manual builds only.
     */
    None = 1,
    /**
     * A build should be started for each changeset.
     */
    ContinuousIntegration = 2,
    /**
     * A build should be started for multiple changesets at a time at a specified interval.
     */
    BatchedContinuousIntegration = 4,
    /**
     * A build should be started on a specified schedule whether or not changesets exist.
     */
    Schedule = 8,
    /**
     * A validation build should be started for each check-in.
     */
    GatedCheckIn = 16,
    /**
     * A validation build should be started for each batch of check-ins.
     */
    BatchedGatedCheckIn = 32,
    /**
     * All types.
     */
    All = 63,
}
export enum DefinitionType {
    Xaml = 1,
    Build = 2,
}
export enum DeleteOptions {
    /**
     * No data should be deleted. This value should not be used.
     */
    None = 0,
    /**
     * The drop location should be deleted.
     */
    DropLocation = 1,
    /**
     * The test results should be deleted.
     */
    TestResults = 2,
    /**
     * The version control label should be deleted.
     */
    Label = 4,
    /**
     * The build should be deleted.
     */
    Details = 8,
    /**
     * Published symbols should be deleted.
     */
    Symbols = 16,
    /**
     * All data should be deleted.
     */
    All = 31,
}
/**
 * Represents the data from the build information nodes for type "DeploymentInformation" for xaml builds
 */
export interface Deployment {
    type: string;
}
/**
 * Deployment iformation for type "Build"
 */
export interface DeploymentBuild extends Deployment {
    buildId: number;
}
/**
 * Deployment iformation for type "Deploy"
 */
export interface DeploymentDeploy extends Deployment {
    message: string;
}
/**
 * Deployment iformation for type "Test"
 */
export interface DeploymentTest extends Deployment {
    runId: number;
}
export interface Folder {
    /**
     * Process or person who created the folder
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Creation date of the folder
     */
    createdOn: Date;
    /**
     * The description of the folder
     */
    description: string;
    /**
     * Process or person that last changed the folder
     */
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Date the folder was last changed
     */
    lastChangedDate: Date;
    /**
     * The path of the folder
     */
    path: string;
    /**
     * The project.
     */
    project: TFS_Core_Contracts.TeamProjectReference;
}
export enum FolderQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by folder name and path ascending.
     */
    FolderAscending = 1,
    /**
     * Order by folder name and path descending.
     */
    FolderDescending = 2,
}
export interface GatedCheckInTrigger extends BuildTrigger {
    pathFilters: string[];
    runContinuousIntegration: boolean;
    useWorkspaceMappings: boolean;
}
export enum GetOption {
    /**
     * Use the latest changeset at the time the build is queued.
     */
    LatestOnQueue = 0,
    /**
     * Use the latest changeset at the time the build is started.
     */
    LatestOnBuild = 1,
    /**
     * A user-specified version has been supplied.
     */
    Custom = 2,
}
/**
 * Data representation of an information node associated with a build
 */
export interface InformationNode {
    /**
     * Fields of the information node
     */
    fields: {
        [key: string]: string;
    };
    /**
     * Process or person that last modified this node
     */
    lastModifiedBy: string;
    /**
     * Date this node was last modified
     */
    lastModifiedDate: Date;
    /**
     * Node Id of this information node
     */
    nodeId: number;
    /**
     * Id of parent node (xml tree)
     */
    parentId: number;
    /**
     * The type of the information node
     */
    type: string;
}
export interface Issue {
    category: string;
    data: {
        [key: string]: string;
    };
    message: string;
    type: IssueType;
}
export enum IssueType {
    Error = 1,
    Warning = 2,
}
export interface MappingDetails {
    localPath: string;
    mappingType: string;
    serverPath: string;
}
export enum ProcessTemplateType {
    /**
     * Indicates a custom template.
     */
    Custom = 0,
    /**
     * Indicates a default template.
     */
    Default = 1,
    /**
     * Indicates an upgrade template.
     */
    Upgrade = 2,
}
export interface PropertyValue {
    /**
     * Guid of identity that changed this property value
     */
    changedBy: string;
    /**
     * The date this property value was changed
     */
    changedDate: Date;
    /**
     * Name in the name value mapping
     */
    propertyName: string;
    /**
     * Value in the name value mapping
     */
    value: any;
}
export enum QueryDeletedOption {
    /**
     * Include only non-deleted builds.
     */
    ExcludeDeleted = 0,
    /**
     * Include deleted and non-deleted builds.
     */
    IncludeDeleted = 1,
    /**
     * Include only deleted builds.
     */
    OnlyDeleted = 2,
}
export enum QueueOptions {
    /**
     * No queue options
     */
    None = 0,
    /**
     * Create a plan Id for the build, do not run it
     */
    DoNotRun = 1,
}
export enum QueuePriority {
    /**
     * Low priority.
     */
    Low = 5,
    /**
     * Below normal priority.
     */
    BelowNormal = 4,
    /**
     * Normal priority.
     */
    Normal = 3,
    /**
     * Above normal priority.
     */
    AboveNormal = 2,
    /**
     * High priority.
     */
    High = 1,
}
export interface RealtimeBuildEvent {
    buildId: number;
}
export enum RepositoryCleanOptions {
    Source = 0,
    SourceAndOutputDir = 1,
    /**
     * Re-create $(build.sourcesDirectory)
     */
    SourceDir = 2,
    /**
     * Re-create $(agnet.buildDirectory) which contains $(build.sourcesDirectory), $(build.binariesDirectory) and any folders that left from previous build.
     */
    AllBuildDir = 3,
}
export interface RequestReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the requestor
     */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface RetentionPolicy {
    artifacts: string[];
    artifactTypesToDelete: string[];
    branches: string[];
    daysToKeep: number;
    deleteBuildRecord: boolean;
    deleteTestResults: boolean;
    minimumToKeep: number;
}
export interface Schedule {
    branchFilters: string[];
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild: ScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
     */
    scheduleJobId: string;
    /**
     * Local timezone hour to start
     */
    startHours: number;
    /**
     * Local timezone minute to start
     */
    startMinutes: number;
    /**
     * Time zone of the build schedule (string representation of the time zone id)
     */
    timeZoneId: string;
}
export enum ScheduleDays {
    /**
     * Do not run.
     */
    None = 0,
    /**
     * Run on Monday.
     */
    Monday = 1,
    /**
     * Run on Tuesday.
     */
    Tuesday = 2,
    /**
     * Run on Wednesday.
     */
    Wednesday = 4,
    /**
     * Run on Thursday.
     */
    Thursday = 8,
    /**
     * Run on Friday.
     */
    Friday = 16,
    /**
     * Run on Saturday.
     */
    Saturday = 32,
    /**
     * Run on Sunday.
     */
    Sunday = 64,
    /**
     * Run on all days of the week.
     */
    All = 127,
}
export interface ScheduleTrigger extends BuildTrigger {
    schedules: Schedule[];
}
export enum ServiceHostStatus {
    /**
     * The service host is currently connected and accepting commands.
     */
    Online = 1,
    /**
     * The service host is currently disconnected and not accepting commands.
     */
    Offline = 2,
}
/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface SvnMappingDetails {
    depth: number;
    ignoreExternals: boolean;
    localPath: string;
    revision: string;
    serverPath: string;
}
export interface SvnWorkspace {
    mappings: SvnMappingDetails[];
}
export interface SyncBuildCompletedEvent extends BuildUpdatedEvent {
}
export interface SyncBuildStartedEvent extends BuildUpdatedEvent {
}
export interface TaskAgentPoolReference {
    id: number;
    name: string;
}
export interface TaskDefinitionReference {
    definitionType: string;
    id: string;
    versionSpec: string;
}
export interface TaskOrchestrationPlanReference {
    /**
     * Orchestration Type for Build (build, cleanup etc.)
     */
    orchestrationType: number;
    planId: string;
}
export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}
export interface TimelineRecord {
    _links: any;
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    log: BuildLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    type: string;
    url: string;
    warningCount: number;
    workerName: string;
}
export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineRecordsUpdatedEvent extends RealtimeBuildEvent {
    timelineRecords: TimelineRecord[];
}
export interface TimelineReference {
    changeId: number;
    id: string;
    url: string;
}
export enum ValidationResult {
    OK = 0,
    Warning = 1,
    Error = 2,
}
/**
 * Mapping for a workspace
 */
export interface WorkspaceMapping {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * Depth of this mapping
     */
    depth: number;
    /**
     * local location of the definition
     */
    localItem: string;
    /**
     * type of workspace mapping
     */
    mappingType: WorkspaceMappingType;
    /**
     * Server location of the definition
     */
    serverItem: string;
    /**
     * Id of the workspace
     */
    workspaceId: number;
}
export enum WorkspaceMappingType {
    /**
     * The path is mapped in the workspace.
     */
    Map = 0,
    /**
     * The path is cloaked in the workspace.
     */
    Cloak = 1,
}
export interface WorkspaceTemplate {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * The identity that last modified this template
     */
    lastModifiedBy: string;
    /**
     * The last time this template was modified
     */
    lastModifiedDate: Date;
    /**
     * List of workspace mappings
     */
    mappings: WorkspaceMapping[];
    /**
     * Id of the workspace for this template
     */
    workspaceId: number;
}
export interface XamlBuildDefinition extends DefinitionReference {
    _links: any;
    /**
     * Batch size of the definition
     */
    batchSize: number;
    buildArgs: string;
    /**
     * The continuous integration quiet period
     */
    continuousIntegrationQuietPeriod: number;
    /**
     * The build controller
     */
    controller: BuildController;
    /**
     * The date this definition was created
     */
    createdOn: Date;
    /**
     * Default drop location for builds from this definition
     */
    defaultDropLocation: string;
    /**
     * Description of the definition
     */
    description: string;
    /**
     * The last build on this definition
     */
    lastBuild: ShallowReference;
    /**
     * The repository
     */
    repository: BuildRepository;
    /**
     * The reasons supported by the template
     */
    supportedReasons: BuildReason;
    /**
     * How builds are triggered from this definition
     */
    triggerType: DefinitionTriggerType;
}
export var TypeInfo: {
    AgentStatus: {
        enumValues: {
            "unavailable": number;
            "available": number;
            "offline": number;
        };
    };
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
        };
    };
    Build: any;
    BuildAgent: any;
    BuildArtifactAddedEvent: any;
    BuildAuthorizationScope: {
        enumValues: {
            "projectCollection": number;
            "project": number;
        };
    };
    BuildChangesCalculatedEvent: any;
    BuildCompletedEvent: any;
    BuildController: any;
    BuildDefinition: any;
    BuildDefinitionChangedEvent: any;
    BuildDefinitionChangingEvent: any;
    BuildDefinitionReference: any;
    BuildDefinitionRevision: any;
    BuildDefinitionSourceProvider: any;
    BuildDefinitionTemplate: any;
    BuildDeletedEvent: any;
    BuildDeployment: any;
    BuildDestroyedEvent: any;
    BuildLog: any;
    BuildMetric: any;
    BuildOptionDefinition: any;
    BuildOptionInputDefinition: any;
    BuildOptionInputType: {
        enumValues: {
            "string": number;
            "boolean": number;
            "stringList": number;
            "radio": number;
            "pickList": number;
            "multiLine": number;
        };
    };
    BuildPhaseStatus: {
        enumValues: {
            "unknown": number;
            "failed": number;
            "succeeded": number;
        };
    };
    BuildProcessTemplate: any;
    BuildQueryOrder: {
        enumValues: {
            "finishTimeAscending": number;
            "finishTimeDescending": number;
        };
    };
    BuildQueuedEvent: any;
    BuildReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "individualCI": number;
            "batchedCI": number;
            "schedule": number;
            "userCreated": number;
            "validateShelveset": number;
            "checkInShelveset": number;
            "pullRequest": number;
            "triggered": number;
            "all": number;
        };
    };
    BuildReference: any;
    BuildRequestValidationResult: any;
    BuildResult: {
        enumValues: {
            "none": number;
            "succeeded": number;
            "partiallySucceeded": number;
            "failed": number;
            "canceled": number;
        };
    };
    BuildServer: any;
    BuildStartedEvent: any;
    BuildStatus: {
        enumValues: {
            "none": number;
            "inProgress": number;
            "completed": number;
            "cancelling": number;
            "postponed": number;
            "notStarted": number;
            "all": number;
        };
    };
    BuildSummary: any;
    BuildTrigger: any;
    BuildUpdatedEvent: any;
    Change: any;
    ContinuousIntegrationTrigger: any;
    ControllerStatus: {
        enumValues: {
            "unavailable": number;
            "available": number;
            "offline": number;
        };
    };
    DefinitionQuality: {
        enumValues: {
            "definition": number;
            "draft": number;
        };
    };
    DefinitionQueryOrder: {
        enumValues: {
            "none": number;
            "lastModifiedAscending": number;
            "lastModifiedDescending": number;
            "definitionNameAscending": number;
            "definitionNameDescending": number;
        };
    };
    DefinitionQueueStatus: {
        enumValues: {
            "enabled": number;
            "paused": number;
            "disabled": number;
        };
    };
    DefinitionReference: any;
    DefinitionTriggerType: {
        enumValues: {
            "none": number;
            "continuousIntegration": number;
            "batchedContinuousIntegration": number;
            "schedule": number;
            "gatedCheckIn": number;
            "batchedGatedCheckIn": number;
            "all": number;
        };
    };
    DefinitionType: {
        enumValues: {
            "xaml": number;
            "build": number;
        };
    };
    DeleteOptions: {
        enumValues: {
            "none": number;
            "dropLocation": number;
            "testResults": number;
            "label": number;
            "details": number;
            "symbols": number;
            "all": number;
        };
    };
    Folder: any;
    FolderQueryOrder: {
        enumValues: {
            "none": number;
            "folderAscending": number;
            "folderDescending": number;
        };
    };
    GatedCheckInTrigger: any;
    GetOption: {
        enumValues: {
            "latestOnQueue": number;
            "latestOnBuild": number;
            "custom": number;
        };
    };
    InformationNode: any;
    Issue: any;
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    ProcessTemplateType: {
        enumValues: {
            "custom": number;
            "default": number;
            "upgrade": number;
        };
    };
    PropertyValue: any;
    QueryDeletedOption: {
        enumValues: {
            "excludeDeleted": number;
            "includeDeleted": number;
            "onlyDeleted": number;
        };
    };
    QueueOptions: {
        enumValues: {
            "none": number;
            "doNotRun": number;
        };
    };
    QueuePriority: {
        enumValues: {
            "low": number;
            "belowNormal": number;
            "normal": number;
            "aboveNormal": number;
            "high": number;
        };
    };
    RepositoryCleanOptions: {
        enumValues: {
            "source": number;
            "sourceAndOutputDir": number;
            "sourceDir": number;
            "allBuildDir": number;
        };
    };
    Schedule: any;
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
    ScheduleTrigger: any;
    ServiceHostStatus: {
        enumValues: {
            "online": number;
            "offline": number;
        };
    };
    SyncBuildCompletedEvent: any;
    SyncBuildStartedEvent: any;
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    Timeline: any;
    TimelineRecord: any;
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    TimelineRecordsUpdatedEvent: any;
    ValidationResult: {
        enumValues: {
            "oK": number;
            "warning": number;
            "error": number;
        };
    };
    WorkspaceMapping: any;
    WorkspaceMappingType: {
        enumValues: {
            "map": number;
            "cloak": number;
        };
    };
    WorkspaceTemplate: any;
    XamlBuildDefinition: any;
};
}
declare module "TFS/Build/ExtensionContracts" {
import Build_Contracts = require("TFS/Build/Contracts");
/**
* Interface defining the configuration that is shared between extension targeted at "ms.vss-build-web.build-results-view" and the host
*/
export interface IBuildResultsViewExtensionConfig {
    /**
    * Required if reacting to the current build.
    * More than one callbacks can be added, and all will be called.
    * It is important to have atleast one call back, since that's how an extension can get information about the current build.
    */
    onBuildChanged: (handler: (build: Build_Contracts.Build) => void) => void;
    /**
    * Optional, If needed, this callback will be called when this particular extension is selected/displayed
    */
    onViewDisplayed: (onDisplayedCallBack: () => void) => void;
    /**
    * Optional, for a given tab id, which can be contribution id for tab or a well known tab id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string) => void;
}
/**
* Existing tab ids in build results view
*/
export var BuildResultsViewTabIds: {
    Summary: string;
    Console: string;
    Logs: string;
    Timeline: string;
    Artifacts: string;
    XamlLog: string;
    XamlDiagnostics: string;
};
/**
* Existing section ids in build results view's summary tab
*/
export var BuildResultsSummaryTabSectionIds: {
    BuildDetails: string;
    BuildIssues: string;
    AssociatedChangeset: string;
    DeploymentInformation: string;
    BuildTags: string;
    TestSummary: string;
    CodeCoverageSummary: string;
    AssociatedWorkItem: string;
};
}
declare module "TFS/Build/RestClient" {
import Contracts = require("TFS/Build/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected artifactsApiVersion: string;
    protected badgeApiVersion: string;
    protected buildbadgeApiVersion: string;
    protected controllersApiVersion: string;
    protected definitionsApiVersion: string;
    protected optionsApiVersion: string;
    protected resourceUsageApiVersion: string;
    protected revisionsApiVersion: string;
    protected settingsApiVersion: string;
    protected tagsApiVersion: string;
    protected tagsApiVersion_6e6114b2: string;
    protected templatesApiVersion: string;
    protected timelineApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets details for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {string} planId
     * @return IPromise<Contracts.Timeline>
     */
    getBuildTimeline(project: string, buildId: number, timelineId?: string, changeId?: number, planId?: string): IPromise<Contracts.Timeline>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate[]>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    getTags(project: string): IPromise<string[]>;
    /**
     * Gets the tags for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<string[]>
     */
    getBuildTags(project: string, buildId: number): IPromise<string[]>;
    /**
     * Deletes a tag from a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteBuildTag(project: string, buildId: number, tag: string): IPromise<string[]>;
    /**
     * Adds tag to a build
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<string[]>
     */
    addBuildTags(tags: string[], project: string, buildId: number): IPromise<string[]>;
    /**
     * Adds a tag to a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addBuildTag(project: string, buildId: number, tag: string): IPromise<string[]>;
    /**
     * Updates the build settings
     *
     * @param {Contracts.BuildSettings} settings
     * @return IPromise<Contracts.BuildSettings>
     */
    updateBuildSettings(settings: Contracts.BuildSettings): IPromise<Contracts.BuildSettings>;
    /**
     * @return IPromise<Contracts.BuildSettings>
     */
    getBuildSettings(): IPromise<Contracts.BuildSettings>;
    /**
     * Gets revisions of a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<Contracts.BuildDefinitionRevision[]>
     */
    getDefinitionRevisions(project: string, definitionId: number): IPromise<Contracts.BuildDefinitionRevision[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @return IPromise<Contracts.BuildResourceUsage>
     */
    getResourceUsage(): IPromise<Contracts.BuildResourceUsage>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildOptionDefinition[]>
     */
    getBuildOptionDefinitions(project?: string): IPromise<Contracts.BuildOptionDefinition[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition>
     */
    updateDefinition(definition: Contracts.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition>
     */
    createDefinition(definition: Contracts.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition>;
    /**
     * Gets controller, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.BuildController[]>
     */
    getBuildControllers(name?: string): IPromise<Contracts.BuildController[]>;
    /**
     * Gets a controller
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.BuildController>
     */
    getBuildController(controllerId: number): IPromise<Contracts.BuildController>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} repoType
     * @param {string} repoId
     * @param {string} branchName
     * @return IPromise<string>
     */
    getBuildBadgeData(project: string, repoType: string, repoId?: string, branchName?: string): IPromise<string>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} repoType
     * @param {string} repoId
     * @param {string} branchName
     * @return IPromise<Contracts.BuildBadge>
     */
    getBuildBadge(project: string, repoType: string, repoId?: string, branchName?: string): IPromise<Contracts.BuildBadge>;
    /**
     * @param {string} project
     * @param {number} definitionId
     * @param {string} branchName
     * @return IPromise<string>
     */
    getBadge(project: string, definitionId: number, branchName?: string): IPromise<string>;
    /**
     * Associates an artifact with a build
     *
     * @param {Contracts.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
}
export class CommonMethods2_1To3_1 extends CommonMethods2To3_1 {
    protected changesApiVersion: string;
    protected workitemsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets all the work item ids inbetween fromBuildId to toBuildId
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of workitems to return
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * [Preview API] Gets the changes associated between given builds
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of changes to return
     * @return IPromise<Contracts.Change[]>
     */
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): IPromise<Contracts.Change[]>;
}
export class CommonMethods3To3_1 extends CommonMethods2_1To3_1 {
    protected artifactsApiVersion: string;
    protected buildsApiVersion: string;
    protected changesApiVersion_54572c7b: string;
    protected definitionsApiVersion: string;
    protected foldersApiVersion: string;
    protected logsApiVersion: string;
    protected reportApiVersion: string;
    protected workitemsApiVersion_5a21f5d2: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @return IPromise<any>
     */
    getBuildReportHtmlContent(project: string, buildId: number, type?: string): IPromise<any>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @return IPromise<Contracts.BuildReportMetadata>
     */
    getBuildReport(project: string, buildId: number, type?: string): IPromise<Contracts.BuildReportMetadata>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @return IPromise<string[]>
     */
    getBuildLogLines(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): IPromise<string[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @return IPromise<string>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): IPromise<string>;
    /**
     * @exemptedapi
     * [Preview API] Updates an existing folder at given  existing path
     *
     * @param {Contracts.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<Contracts.Folder>
     */
    updateFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * @exemptedapi
     * [Preview API] Gets folders
     *
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @param {Contracts.FolderQueryOrder} queryOrder
     * @return IPromise<Contracts.Folder[]>
     */
    getFolders(project: string, path?: string, queryOrder?: Contracts.FolderQueryOrder): IPromise<Contracts.Folder[]>;
    /**
     * @exemptedapi
     * [Preview API] Deletes a definition folder for given folder name and path and all it's existing definitions and it's corresponding builds
     *
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<void>
     */
    deleteFolder(project: string, path: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Creates a new folder
     *
     * @param {Contracts.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<Contracts.Folder>
     */
    createFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @param {string} continuationToken
     * @param {Date} minMetricsTime
     * @param {number[]} definitionIds
     * @param {string} path
     * @param {Date} builtAfter
     * @param {Date} notBuiltAfter
     * @param {boolean} includeAllProperties
     * @return IPromise<Contracts.BuildDefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number, continuationToken?: string, minMetricsTime?: Date, definitionIds?: number[], path?: string, builtAfter?: Date, notBuiltAfter?: Date, includeAllProperties?: boolean): IPromise<Contracts.BuildDefinitionReference[]>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {Date} minMetricsTime
     * @param {string[]} propertyFilters
     * @return IPromise<Contracts.BuildDefinition>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, minMetricsTime?: Date, propertyFilters?: string[]): IPromise<Contracts.BuildDefinition>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean): IPromise<Contracts.Change[]>;
    /**
     * Update a batch of builds
     *
     * @param {Contracts.Build[]} builds
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Build[]>
     */
    updateBuilds(builds: Contracts.Build[], project?: string): IPromise<Contracts.Build[]>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string): IPromise<Contracts.Build>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @param {number[]} buildIds
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): IPromise<Contracts.Build[]>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string): IPromise<Contracts.Build>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string): IPromise<void>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string): IPromise<ArrayBuffer>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string): IPromise<Contracts.BuildArtifact>;
}
/**
 * @exemptedapi
 */
export class BuildHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets metrics of a project
     *
     * @param {string} project - Project ID or project name
     * @param {string} metricAggregationType
     * @param {Date} minMetricsTime
     * @return IPromise<Contracts.BuildMetric[]>
     */
    getProjectMetrics(project: string, metricAggregationType?: string, minMetricsTime?: Date): IPromise<Contracts.BuildMetric[]>;
    /**
     * [Preview API] Gets metrics of a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {Date} minMetricsTime
     * @return IPromise<Contracts.BuildMetric[]>
     */
    getDefinitionMetrics(project: string, definitionId: number, minMetricsTime?: Date): IPromise<Contracts.BuildMetric[]>;
    /**
     * [Preview API] Adds a tag to a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addDefinitionTag(project: string, definitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Adds multiple tags to a definition
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<string[]>
     */
    addDefinitionTags(tags: string[], project: string, definitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Deletes a tag from a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteDefinitionTag(project: string, definitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Gets the tags for a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     * @return IPromise<string[]>
     */
    getDefinitionTags(project: string, definitionId: number, revision?: number): IPromise<string[]>;
}
/**
 * @exemptedapi
 */
export class BuildHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets metrics of a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {Date} minMetricsTime
     * @return IPromise<Contracts.BuildMetric[]>
     */
    getDefinitionMetrics(project: string, definitionId: number, minMetricsTime?: Date): IPromise<Contracts.BuildMetric[]>;
}
export class BuildHttpClient2_3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<string[]>
     */
    getBuildLogJson(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<string[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<string>
     */
    getBuildLogStream(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<string>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildReportMetadata>
     */
    getBuildReport(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildReportMetadata>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<any>
     */
    getBuildReportHtmlContent(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<any>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient2_2 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.Deployment[]>
     */
    getBuildDeployments(project: string, buildId: number): IPromise<Contracts.Deployment[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildReportMetadata>
     */
    getBuildReport(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildReportMetadata>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<any>
     */
    getBuildReportHtmlContent(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<any>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.Deployment[]>
     */
    getBuildDeployments(project: string, buildId: number): IPromise<Contracts.Deployment[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.Deployment[]>
     */
    getBuildDeployments(project: string, buildId: number): IPromise<Contracts.Deployment[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient extends BuildHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return BuildHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): BuildHttpClient3;
}
declare module "TFS/Chat/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface Message {
    /**
     * Message content
     */
    content: string;
    /**
     * Message Id
     */
    id: number;
    /**
     * Message Type, currently only plain text is supported.
     */
    messageType: MessageType;
    /**
     * User who posted the message. May be null if message came from a system account
     */
    postedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Id of the room in which message is posted
     */
    postedRoomId: number;
    /**
     * Message posted time
     */
    postedTime: Date;
}
export interface MessageData {
    content: string;
}
export enum MessageType {
    /**
     * A normal message that is sent by a user in plain text
     */
    Normal = 0,
    /**
     * A system message like User Entered and User Left Room
     */
    System = 1,
    /**
     * A notification from a TFS event
     */
    Notification = 2,
    /**
     * An error messsage.
     */
    Error = 3,
}
export interface Room {
    /**
     * Room creator user
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Room creation date
     */
    createdDate: Date;
    /**
     * Description of the room
     */
    description: string;
    /**
     * Admin permissions for current user
     */
    hasAdminPermissions: boolean;
    /**
     * Read/Write permissions for current user
     */
    hasReadWritePermissions: boolean;
    /**
     * Id of the room
     */
    id: number;
    /**
     * Last activity in the room
     */
    lastActivity: Date;
    /**
     * Name of the room
     */
    name: string;
}
export interface RoomCollection {
}
export interface RoomData {
    /**
     * Description of the room
     */
    description: string;
    /**
     * Name of the room
     */
    name: string;
}
export interface User {
    /**
     * A value indicating whether the user is online or not.
     */
    isOnline: boolean;
    /**
     * Time when user joined the room
     */
    joinedDate: Date;
    /**
     * Last activity time
     */
    lastActivity: Date;
    /**
     * Id of the Room
     */
    roomId: number;
    /**
     * The shallow reference for the user
     */
    user: VSS_Common_Contracts.IdentityRef;
}
export interface UserCollection {
}
export interface UserData {
    userId: string;
}
export var TypeInfo: {
    Message: any;
    MessageType: {
        enumValues: {
            "normal": number;
            "system": number;
            "notification": number;
            "error": number;
        };
    };
    Room: any;
    User: any;
};
}
declare module "TFS/Chat/RestClient" {
import Contracts = require("TFS/Chat/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected messagesApiVersion: string;
    protected roomsApiVersion: string;
    protected usersApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Leaves a user from a given room
     *
     * @param {number} roomId - Id of the room
     * @param {string} userId - TfId of the user
     * @return IPromise<void>
     */
    leaveRoom(roomId: number, userId: string): IPromise<void>;
    /**
     * Joins a user to a given room
     *
     * @param {Contracts.UserData} userUpdate - user model information
     * @param {number} roomId - Id of the room
     * @param {string} userId - TfId of the user
     * @return IPromise<void>
     */
    joinRoom(userUpdate: Contracts.UserData, roomId: number, userId: string): IPromise<void>;
    /**
     * Retrieve information on a single chat user
     *
     * @param {number} roomId - Id of the room
     * @param {string} userId - TfId of the user
     * @return IPromise<Contracts.User>
     */
    getChatRoomUserById(roomId: number, userId: string): IPromise<Contracts.User>;
    /**
     * Retrieve a listing of all chat users
     *
     * @param {number} roomId - Id of the room
     * @return IPromise<Contracts.UserCollection>
     */
    getAllChatRoomUsers(roomId: number): IPromise<Contracts.UserCollection>;
    /**
     * Update information on a single chat room
     *
     * @param {Contracts.RoomData} roomUpdate - Room information
     * @param {number} roomId - Id of the room to update
     * @return IPromise<Contracts.Room>
     */
    updateChatRoom(roomUpdate: Contracts.RoomData, roomId: number): IPromise<Contracts.Room>;
    /**
     * Retrieve information on a single chat room
     *
     * @param {number} roomId - Id of the room to retrieve
     * @return IPromise<Contracts.Room>
     */
    getChatRoomById(roomId: number): IPromise<Contracts.Room>;
    /**
     * @return IPromise<Contracts.RoomCollection>
     */
    getAllRooms(): IPromise<Contracts.RoomCollection>;
    /**
     * Delete a given chat room
     *
     * @param {number} roomId - Id of the room
     * @return IPromise<void>
     */
    deleteChatRoom(roomId: number): IPromise<void>;
    /**
     * Create a single chat room
     *
     * @param {Contracts.RoomData} roomUpdate - Information to create the room
     * @return IPromise<Contracts.Room>
     */
    createChatRoom(roomUpdate: Contracts.RoomData): IPromise<Contracts.Room>;
    /**
     * Update a given chat message
     *
     * @param {Contracts.MessageData} messageUpdate - New message content
     * @param {number} roomId - Id of the room
     * @param {number} messageId - Id of the message
     * @return IPromise<Contracts.Message>
     */
    updateChatMessage(messageUpdate: Contracts.MessageData, roomId: number, messageId: number): IPromise<Contracts.Message>;
    /**
     * Post message to a room
     *
     * @param {Contracts.MessageData} messageUpdate - Content of the message to post
     * @param {number} roomId - Id of the room
     * @return IPromise<Contracts.Message>
     */
    sendMessageToRoom(messageUpdate: Contracts.MessageData, roomId: number): IPromise<Contracts.Message>;
    /**
     * Retrieve information on a single chat message
     *
     * @param {number} roomId - Id of the room
     * @param {number} messageId - Id of the message to retrieve
     * @return IPromise<Contracts.Message>
     */
    getChatRoomMessageById(roomId: number, messageId: number): IPromise<Contracts.Message>;
    /**
     * Retrieve a listing of all chat messages in a given room
     *
     * @param {number} roomId - Id of the room
     * @return IPromise<Contracts.Message[]>
     */
    getAllChatRoomMessages(roomId: number): IPromise<Contracts.Message[]>;
    /**
     * Delete a given chat message
     *
     * @param {number} roomId - Id of the room
     * @param {number} messageId - Id of the message to delete
     * @return IPromise<void>
     */
    deleteMessage(roomId: number, messageId: number): IPromise<void>;
}
/**
 * @exemptedapi
 */
export class ChatHttpClient3_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ChatHttpClient3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ChatHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ChatHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ChatHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ChatHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class ChatHttpClient extends ChatHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return ChatHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): ChatHttpClient3;
}
declare module "TFS/Core/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export enum ConnectedServiceKind {
    /**
     * Custom or unknown service
     */
    Custom = 0,
    /**
     * Azure Subscription
     */
    AzureSubscription = 1,
    /**
     * Chef Connection
     */
    Chef = 2,
    /**
     * Generic Connection
     */
    Generic = 3,
}
export interface IdentityData {
    identityIds: string[];
}
export interface Process extends ProcessReference {
    _links: any;
    description: string;
    id: string;
    isDefault: boolean;
    type: ProcessType;
}
export interface ProcessReference {
    name: string;
    url: string;
}
export enum ProcessType {
    System = 0,
    Custom = 1,
    Inherited = 2,
}
export enum ProjectChangeType {
    Modified = 0,
    Deleted = 1,
    Added = 2,
}
/**
 * Contains information of the project
 */
export interface ProjectInfo {
    abbreviation: string;
    description: string;
    id: string;
    lastUpdateTime: Date;
    name: string;
    properties: ProjectProperty[];
    /**
     * Current revision of the project
     */
    revision: number;
    state: any;
    uri: string;
    version: number;
}
export interface ProjectMessage {
    project: ProjectInfo;
    projectChangeType: ProjectChangeType;
}
export interface ProjectProperty {
    name: string;
    value: string;
}
export interface Proxy {
    /**
     * This is a description string
     */
    description: string;
    /**
     * The friendly name of the server
     */
    friendlyName: string;
    globalDefault: boolean;
    /**
     * This is a string representation of the site that the proxy server is located in (e.g. "NA-WA-RED")
     */
    site: string;
    siteDefault: boolean;
    /**
     * The URL of the proxy server
     */
    url: string;
}
export enum SourceControlTypes {
    Tfvc = 1,
    Git = 2,
}
/**
 * The Team Context for an operation.
 */
export interface TeamContext {
    /**
     * The team project Id or name.  Ignored if ProjectId is set.
     */
    project: string;
    /**
     * The Team Project ID.  Required if Project is not set.
     */
    projectId: string;
    /**
     * The Team Id or name.  Ignored if TeamId is set.
     */
    team: string;
    /**
     * The Team Id
     */
    teamId: string;
}
/**
 * Represents a Team Project object.
 */
export interface TeamProject extends TeamProjectReference {
    /**
     * The links to other objects related to this object.
     */
    _links: any;
    /**
     * Set of capabilities this project has (such as process template & version control).
     */
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * The shallow ref to the default team.
     */
    defaultTeam: WebApiTeamRef;
}
/**
 * Data contract for a TeamProjectCollection.
 */
export interface TeamProjectCollection extends TeamProjectCollectionReference {
    /**
     * The links to other objects related to this object.
     */
    _links: any;
    /**
     * Project collection description.
     */
    description: string;
    /**
     * Project collection state.
     */
    state: string;
}
/**
 * Reference object for a TeamProjectCollection.
 */
export interface TeamProjectCollectionReference {
    /**
     * Collection Id.
     */
    id: string;
    /**
     * Collection Name.
     */
    name: string;
    /**
     * Collection REST Url.
     */
    url: string;
}
/**
 * Represents a shallow reference to a TeamProject.
 */
export interface TeamProjectReference {
    /**
     * Project abbreviation.
     */
    abbreviation: string;
    /**
     * The project's description (if any).
     */
    description: string;
    /**
     * Project identifier.
     */
    id: string;
    /**
     * Project name.
     */
    name: string;
    /**
     * Project revision.
     */
    revision: number;
    /**
     * Project state.
     */
    state: any;
    /**
     * Url to the full version of the object.
     */
    url: string;
}
/**
 * A data transfer object that stores the metadata associated with the creation of temporary data.
 */
export interface TemporaryDataCreatedDTO extends TemporaryDataDTO {
    expirationDate: Date;
    id: string;
    url: string;
}
/**
 * A data transfer object that stores the metadata associated with the temporary data.
 */
export interface TemporaryDataDTO {
    expirationSeconds: number;
    origin: string;
    value: any;
}
export interface WebApiConnectedService extends WebApiConnectedServiceRef {
    /**
     * The user who did the OAuth authentication to created this service
     */
    authenticatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Extra description on the service.
     */
    description: string;
    /**
     * Friendly Name of service connection
     */
    friendlyName: string;
    /**
     * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
     */
    id: string;
    /**
     * The kind of service.
     */
    kind: string;
    /**
     * The project associated with this service
     */
    project: TeamProjectReference;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    serviceUri: string;
}
export interface WebApiConnectedServiceDetails extends WebApiConnectedServiceRef {
    /**
     * Meta data for service connection
     */
    connectedServiceMetaData: WebApiConnectedService;
    /**
     * Credential info
     */
    credentialsXml: string;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    endPoint: string;
}
export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}
/**
 * The representation of data needed to create a tag definition which is sent across the wire.
 */
export interface WebApiCreateTagRequestData {
    name: string;
}
export interface WebApiProject extends TeamProjectReference {
    /**
     * Set of capabilities this project has
     */
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * Reference to collection which contains this project
     */
    collection: WebApiProjectCollectionRef;
    /**
     * Default team for this project
     */
    defaultTeam: WebApiTeamRef;
}
export interface WebApiProjectCollection extends WebApiProjectCollectionRef {
    /**
     * Project collection description
     */
    description: string;
    /**
     * Project collection state
     */
    state: string;
}
export interface WebApiProjectCollectionRef {
    /**
     * Collection Tfs Url (Host Url)
     */
    collectionUrl: string;
    /**
     * Collection Guid
     */
    id: string;
    /**
     * Collection Name
     */
    name: string;
    /**
     * Collection REST Url
     */
    url: string;
}
/**
 * The representation of a tag definition which is sent across the wire.
 */
export interface WebApiTagDefinition {
    active: boolean;
    id: string;
    name: string;
    url: string;
}
export interface WebApiTeam extends WebApiTeamRef {
    /**
     * Team description
     */
    description: string;
    /**
     * Identity REST API Url to this team
     */
    identityUrl: string;
}
export interface WebApiTeamRef {
    /**
     * Team (Identity) Guid. A Team Foundation ID.
     */
    id: string;
    /**
     * Team name
     */
    name: string;
    /**
     * Team REST API Url
     */
    url: string;
}
export var TypeInfo: {
    ConnectedServiceKind: {
        enumValues: {
            "custom": number;
            "azureSubscription": number;
            "chef": number;
            "generic": number;
        };
    };
    Process: any;
    ProcessType: {
        enumValues: {
            "system": number;
            "custom": number;
            "inherited": number;
        };
    };
    ProjectChangeType: {
        enumValues: {
            "modified": number;
            "deleted": number;
            "added": number;
        };
    };
    ProjectInfo: any;
    ProjectMessage: any;
    SourceControlTypes: {
        enumValues: {
            "tfvc": number;
            "git": number;
        };
    };
    TemporaryDataCreatedDTO: any;
};
}
declare module "TFS/Core/RestClient" {
import Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_Operations_Contracts = require("VSS/Operations/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected connectedServicesApiVersion: string;
    protected identityMruApiVersion: string;
    protected membersApiVersion: string;
    protected processesApiVersion: string;
    protected projectCollectionsApiVersion: string;
    protected projectHistoryApiVersion: string;
    protected projectsApiVersion: string;
    protected proxiesApiVersion: string;
    protected teamsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Updates a team's name and/or description
     *
     * @param {Contracts.WebApiTeam} teamData
     * @param {string} projectId - The name or id (GUID) of the team project containing the team to update.
     * @param {string} teamId - The name of id of the team to update.
     * @return IPromise<Contracts.WebApiTeam>
     */
    updateTeam(teamData: Contracts.WebApiTeam, projectId: string, teamId: string): IPromise<Contracts.WebApiTeam>;
    /**
     * @param {string} projectId
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
    /**
     * Gets a team
     *
     * @param {string} projectId
     * @param {string} teamId
     * @return IPromise<Contracts.WebApiTeam>
     */
    getTeam(projectId: string, teamId: string): IPromise<Contracts.WebApiTeam>;
    /**
     * Deletes a team
     *
     * @param {string} projectId - The name or id (GUID) of the team project containing the team to delete.
     * @param {string} teamId - The name of id of the team to delete.
     * @return IPromise<void>
     */
    deleteTeam(projectId: string, teamId: string): IPromise<void>;
    /**
     * Creates a team
     *
     * @param {Contracts.WebApiTeam} team - The team data used to create the team.
     * @param {string} projectId - The name or id (GUID) of the team project in which to create the team.
     * @return IPromise<Contracts.WebApiTeam>
     */
    createTeam(team: Contracts.WebApiTeam, projectId: string): IPromise<Contracts.WebApiTeam>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} proxyUrl
     * @return IPromise<Contracts.Proxy[]>
     */
    getProxies(proxyUrl?: string): IPromise<Contracts.Proxy[]>;
    /**
     * Update an existing project's name, abbreviation, or description.
     *
     * @param {Contracts.TeamProject} projectUpdate - The updates for the project.
     * @param {string} projectId - The project id of the project to update.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    updateProject(projectUpdate: Contracts.TeamProject, projectId: string): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Queue a project deletion.
     *
     * @param {string} projectId - The project id of the project to delete.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    queueDeleteProject(projectId: string): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Queue a project creation.
     *
     * @param {Contracts.TeamProject} projectToCreate - The project to create.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    queueCreateProject(projectToCreate: Contracts.TeamProject): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Get project references with the specified state
     *
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjects(stateFilter?: any, top?: number, skip?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get project with the specified id or name, optionally including capabilities.
     *
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     * @return IPromise<Contracts.TeamProject>
     */
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): IPromise<Contracts.TeamProject>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get project collection references for this application.
     *
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.TeamProjectCollectionReference[]>
     */
    getProjectCollections(top?: number, skip?: number): IPromise<Contracts.TeamProjectCollectionReference[]>;
    /**
     * Get project collection with the specified id or name.
     *
     * @param {string} collectionId
     * @return IPromise<Contracts.TeamProjectCollection>
     */
    getProjectCollection(collectionId: string): IPromise<Contracts.TeamProjectCollection>;
    /**
     * @return IPromise<Contracts.Process[]>
     */
    getProcesses(): IPromise<Contracts.Process[]>;
    /**
     * Retrieve process by id
     *
     * @param {string} processId
     * @return IPromise<Contracts.Process>
     */
    getProcessById(processId: string): IPromise<Contracts.Process>;
    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.IdentityData} mruData
     * @param {string} mruName
     * @return IPromise<void>
     */
    updateIdentityMru(mruData: Contracts.IdentityData, mruName: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} mruName
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getIdentityMru(mruName: string): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.IdentityData} mruData
     * @param {string} mruName
     * @return IPromise<void>
     */
    deleteIdentityMru(mruData: Contracts.IdentityData, mruName: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.IdentityData} mruData
     * @param {string} mruName
     * @return IPromise<void>
     */
    createIdentityMru(mruData: Contracts.IdentityData, mruName: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} projectId
     * @param {Contracts.ConnectedServiceKind} kind
     * @return IPromise<Contracts.WebApiConnectedService[]>
     */
    getConnectedServices(projectId: string, kind?: Contracts.ConnectedServiceKind): IPromise<Contracts.WebApiConnectedService[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} projectId
     * @param {string} name
     * @return IPromise<Contracts.WebApiConnectedServiceDetails>
     */
    getConnectedServiceDetails(projectId: string, name: string): IPromise<Contracts.WebApiConnectedServiceDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     * @return IPromise<Contracts.WebApiConnectedService>
     */
    createConnectedService(connectedServiceCreationData: Contracts.WebApiConnectedServiceDetails, projectId: string): IPromise<Contracts.WebApiConnectedService>;
}
/**
 * @exemptedapi
 */
export class CoreHttpClient3_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class CoreHttpClient3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class CoreHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class CoreHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class CoreHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class CoreHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class CoreHttpClient extends CoreHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return CoreHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): CoreHttpClient3;
}
declare module "TFS/Dashboards/Contracts" {
export interface Dashboard {
    _links: any;
    eTag: string;
    id: string;
    name: string;
    position: number;
    refreshInterval: number;
    url: string;
    widgets: Widget[];
}
export interface DashboardGroup {
    _links: any;
    dashboardEntries: DashboardGroupEntry[];
    permission: GroupMemberPermission;
    url: string;
}
/**
 * Dashboard group entry, wraping around Dashboard (needed?)
 */
export interface DashboardGroupEntry extends Dashboard {
}
/**
 * Response from RestAPI when saving and editing DashboardGroupEntry
 */
export interface DashboardGroupEntryResponse extends DashboardGroupEntry {
}
export interface DashboardResponse extends DashboardGroupEntry {
}
export enum DashboardScope {
    Collection_User = 0,
    Project_Team = 1,
}
export enum GroupMemberPermission {
    None = 0,
    Edit = 1,
    Manage = 2,
    ManagePermissions = 3,
}
/**
 * Lightbox configuration
 */
export interface LightboxOptions {
    /**
     * Height of desired lightbox, in pixels
     */
    height: number;
    /**
     * True to allow lightbox resizing, false to disallow lightbox resizing, defaults to false.
     */
    resizable: boolean;
    /**
     * Width of desired lightbox, in pixels
     */
    width: number;
}
/**
 * versioning for an artifact as described at: http://semver.org/, of the form major.minor.patch.
 */
export interface SemanticVersion {
    /**
     * Major version when you make incompatible API changes
     */
    major: number;
    /**
     * Minor version when you add functionality in a backwards-compatible manner
     */
    minor: number;
    /**
     * Patch version when you make backwards-compatible bug fixes
     */
    patch: number;
}
/**
 * Widget data
 */
export interface Widget {
    _links: any;
    /**
     * Refers to the allowed sizes for the widget. This gets populated when user wants to configure the widget
     */
    allowedSizes: WidgetSize[];
    /**
     * Refers to unique identifier of a feature artifact. Used for pinning+unpinning a specific artifact.
     */
    artifactId: string;
    configurationContributionId: string;
    configurationContributionRelativeId: string;
    contentUri: string;
    /**
     * The id of the underlying contribution defining the supplied Widget Configuration.
     */
    contributionId: string;
    /**
     * Optional partial dashboard content, to support exchanging dashboard-level version ETag for widget-level APIs
     */
    dashboard: Dashboard;
    eTag: string;
    id: string;
    isEnabled: boolean;
    isNameConfigurable: boolean;
    lightboxOptions: LightboxOptions;
    loadingImageUrl: string;
    name: string;
    position: WidgetPosition;
    settings: string;
    settingsVersion: SemanticVersion;
    size: WidgetSize;
    typeId: string;
    url: string;
}
/**
 * For V1, this is just a pool of definitions describing our possible Widgets.
 */
export interface WidgetMetadata {
    /**
     * Sizes supported by the Widget.
     */
    allowedSizes: WidgetSize[];
    /**
     * Opt-in boolean that indicates if the widget requires the Analytics Service to function. Widgets requiring the analytics service are hidden from the catalog if the Analytics Service is not available.
     */
    analyticsServiceRequired: boolean;
    /**
     * Resource for an icon in the widget catalog.
     */
    catalogIconUrl: string;
    /**
     * Opt-in URL string pointing at widget information. Defaults to extension marketplace URL if omitted
     */
    catalogInfoUrl: string;
    /**
     * The id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionId: string;
    /**
     * The relative id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionRelativeId: string;
    /**
     * Indicates if the widget requires configuration before being added to dashboard.
     */
    configurationRequired: boolean;
    /**
     * Uri for the WidgetFactory to get the widget
     */
    contentUri: string;
    /**
     * The id of the underlying contribution defining the supplied Widget.
     */
    contributionId: string;
    /**
     * Optional default settings to be copied into widget settings
     */
    defaultSettings: string;
    /**
     * Summary information describing the widget.
     */
    description: string;
    /**
     * Widgets can be disabled by the app store.  We'll need to gracefully handle for: - persistence (Allow) - Requests (Tag as disabled, and provide context)
     */
    isEnabled: boolean;
    /**
     * Opt-out boolean that indicates if the widget supports widget name/title configuration. Widgets ignoring the name should set it to false in the manifest.
     */
    isNameConfigurable: boolean;
    /**
     * Opt-out boolean indicating if the widget is hidden from the catalog.  For V1, only "pull" model widgets can be provided from the catalog.
     */
    isVisibleFromCatalog: boolean;
    /**
     * Opt-in lightbox properties
     */
    lightboxOptions: LightboxOptions;
    /**
     * Resource for a loading placeholder image on dashboard
     */
    loadingImageUrl: string;
    /**
     * User facing name of the widget type. Each widget must use a unique value here.
     */
    name: string;
    /**
     * Publisher Name of this kind of widget.
     */
    publisherName: string;
    /**
     * Data contract required for the widget to function and to work in its container.
     */
    supportedScopes: WidgetScope[];
    /**
     * Contribution target IDs
     */
    targets: string[];
    /**
     * Dev-facing id of this kind of widget.
     */
    typeId: string;
}
export interface WidgetMetadataResponse {
    uri: string;
    widgetMetadata: WidgetMetadata;
}
export interface WidgetPosition {
    column: number;
    row: number;
}
/**
 * Response from RestAPI when saving and editing Widget
 */
export interface WidgetResponse extends Widget {
}
export enum WidgetScope {
    Collection_User = 0,
    Project_Team = 1,
}
export interface WidgetSize {
    columnSpan: number;
    rowSpan: number;
}
/**
 * Wrapper class to support HTTP header generation using CreateResponse, ClientHeaderParameter and ClientResponseType in WidgetV2Controller
 */
export interface WidgetsVersionedList {
    eTag: string[];
    widgets: Widget[];
}
export interface WidgetTypesResponse {
    _links: any;
    uri: string;
    widgetTypes: WidgetMetadata[];
}
export var TypeInfo: {
    DashboardGroup: any;
    DashboardScope: {
        enumValues: {
            "collection_User": number;
            "project_Team": number;
        };
    };
    GroupMemberPermission: {
        enumValues: {
            "none": number;
            "edit": number;
            "manage": number;
            "managePermissions": number;
        };
    };
    WidgetMetadata: any;
    WidgetMetadataResponse: any;
    WidgetScope: {
        enumValues: {
            "collection_User": number;
            "project_Team": number;
        };
    };
    WidgetTypesResponse: any;
};
}
declare module "TFS/Dashboards/RestClient" {
import Contracts = require("TFS/Dashboards/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    protected widgetTypesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns available widgets in alphabetical order.
     *
     * @param {Contracts.WidgetScope} scope
     * @return IPromise<Contracts.WidgetTypesResponse>
     */
    getWidgetTypes(scope: Contracts.WidgetScope): IPromise<Contracts.WidgetTypesResponse>;
    /**
     * [Preview API]
     *
     * @param {string} contributionId
     * @return IPromise<Contracts.WidgetMetadataResponse>
     */
    getWidgetMetadata(contributionId: string): IPromise<Contracts.WidgetMetadataResponse>;
}
export class CommonMethods3To3_1 extends CommonMethods2To3_1 {
    protected dashboardsApiVersion: string;
    protected widgetsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget[]} widgets
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {String} eTag - Dashboard Widgets Version
     * @return IPromise<Contracts.WidgetsVersionedList>
     */
    updateWidgets(widgets: Contracts.Widget[], teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, eTag?: String): IPromise<Contracts.WidgetsVersionedList>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {string} widgetId
     * @return IPromise<Contracts.Widget>
     */
    updateWidget(widget: Contracts.Widget, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget[]} widgets
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {String} eTag - Dashboard Widgets Version
     * @return IPromise<Contracts.WidgetsVersionedList>
     */
    replaceWidgets(widgets: Contracts.Widget[], teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, eTag?: String): IPromise<Contracts.WidgetsVersionedList>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {string} widgetId
     * @return IPromise<Contracts.Widget>
     */
    replaceWidget(widget: Contracts.Widget, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {String} eTag - Dashboard Widgets Version
     * @return IPromise<Contracts.WidgetsVersionedList>
     */
    getWidgets(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, eTag?: String): IPromise<Contracts.WidgetsVersionedList>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {string} widgetId
     * @return IPromise<Contracts.Widget>
     */
    getWidget(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @param {string} widgetId
     * @return IPromise<Contracts.Dashboard>
     */
    deleteWidget(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Dashboard>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @return IPromise<Contracts.Widget>
     */
    createWidget(widget: Contracts.Widget, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroup} group
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboards(group: Contracts.DashboardGroup, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @return IPromise<Contracts.Dashboard>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<Contracts.Dashboard>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboards(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @return IPromise<Contracts.Dashboard>
     */
    getDashboard(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<Contracts.Dashboard>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @return IPromise<void>
     */
    deleteDashboard(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.Dashboard>
     */
    createDashboard(dashboard: Contracts.Dashboard, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.Dashboard>;
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroupEntry} entry
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroupEntryResponse>
     */
    createDashboard(entry: Contracts.DashboardGroupEntry, groupId: string, project?: string): IPromise<Contracts.DashboardGroupEntryResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDashboard(groupId: string, dashboardId: string, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    getDashboard(groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboardGroup(groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroup} group
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboardGroup(group: Contracts.DashboardGroup, groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    createWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    getWidget(groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    updateWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroupEntry} entry
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroupEntryResponse>
     */
    createDashboard(entry: Contracts.DashboardGroupEntry, groupId: string, project?: string): IPromise<Contracts.DashboardGroupEntryResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDashboard(groupId: string, dashboardId: string, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    getDashboard(groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboardGroup(groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroup} group
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboardGroup(group: Contracts.DashboardGroup, groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    createWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    getWidget(groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    updateWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroupEntry} entry
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroupEntryResponse>
     */
    createDashboard(entry: Contracts.DashboardGroupEntry, groupId: string, project?: string): IPromise<Contracts.DashboardGroupEntryResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDashboard(groupId: string, dashboardId: string, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    getDashboard(groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboardGroup(groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroup} group
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboardGroup(group: Contracts.DashboardGroup, groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    createWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    getWidget(groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    updateWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
}
export class DashboardHttpClient extends DashboardHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return DashboardHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): DashboardHttpClient3;
}
declare module "TFS/Dashboards/Services" {
/**
* This file is a reference to host services that will be provided by the Dashboards
* framework and used by the widgets.
*/
/**
* Initial set of options passed to a widget.
*/
export interface WidgetOptions {
    /**
    * service reference provided by the widget host.
    */
    widgetService: IPromise<IWidgetHostService>;
}
/**
* a service that manages widget host requests for action.
*/
export interface IWidgetHostService {
    /**
    * request the host to open the configuration experience for the widget.
    * If the widget doesnt have configuration experience this is a no-op
    */
    showConfiguration: () => void;
}
export module WidgetHostService {
    /**
   *  Get an instance of the widget host service
   *
   *  @param configuration Optional configuration to scope the service to.
   */
    function getService(configuration?: WidgetOptions): IPromise<IWidgetHostService>;
}
}
declare module "TFS/Dashboards/WidgetContracts" {
import TFS_Dashboards_Contracts = require("TFS/Dashboards/Contracts");
/**
* settings of the widget that encapsulate their serialized data and version support.
*/
export interface CustomSettings {
    /**
    * the settings data serialized as a string.
    */
    data: string;
    /**
     * (Optional) version for the settings represented as a semantic version object.
     * If none is available, the version defaults to {major:1, minor:0, patch:0} or "1.0.0"
     */
    version?: TFS_Dashboards_Contracts.SemanticVersion;
}
/**
 * A description of widget state, satisfying requirements for rendering a widget (Does not contain grid centric information, or contribution metadata).
 */
export interface WidgetSettings {
    /**
     * size of the widget (in case of configuration, this maps to the size sub section in the general section of the configuration panel)
     */
    size: TFS_Dashboards_Contracts.WidgetSize;
    /**
     * name of the widget (in case of configuration, this maps to the name sub section in the general section of the configuration panel)
     */
    name: string;
    /**
     * settings of the widget
     */
    customSettings: CustomSettings;
    /**
     * Lightbox options
     */
    lightboxOptions?: TFS_Dashboards_Contracts.LightboxOptions;
}
/**
* contract to represent an error used by the framework (and will potentially will be made available to widget authors)
*/
export interface ErrorMessage {
    /**
    * message representing the error.
    */
    message: string;
    /**
    * indicates whether its a rich text or not (that it can have renderable html content).
    */
    isRichText: boolean;
    /**
    * indicates whether this message can be displayed to the user or not. If not a general platform message is shown.
    */
    isUserVisible: boolean;
}
/**
 * Used to differentiate between widget status helpers
 */
export enum WidgetStatusType {
    /**
     * The widget loaded successfully
     */
    Success = 0,
    /**
     * The widget failed to load
     */
    Failure = 1,
    /**
     * The widget needs to be configured
     */
    Unconfigured = 2,
}
/**
 * The object encapsulating the result for an IWidget/IConfigurableWidget method call. This object is created using the WidgetStatusHelper library.
 */
export interface WidgetStatus {
    /**
    * the rendered state of the widget serialized to a string.
    */
    state?: string;
    /**
     * Used to determine which widget status helper was called
     */
    statusType?: WidgetStatusType;
}
/**
 * All widgets implement this interface
 */
export interface IWidget {
    /** widgets use the settings provided along with the any cached data they may have to paint an interactive state. No network calls should be made by the widget.
     *  @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *          when this calls are completed and the experience is done loading.
     */
    preload: (widgetSettings: WidgetSettings) => IPromise<WidgetStatus>;
    /**
     *  Widgets use the settings provided as well as server side calls to complete their rendering experience.
     *  In the future, widgets are expected to provide a loading experience while the calls are being waited to be completed.
     *  Until then, the widget host will provide the loading experience
     *  @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *          when this calls are completed and the experience is done loading.
     */
    load: (widgetSettings: WidgetSettings) => IPromise<WidgetStatus>;
    /**
    * Widgets manage any operations that are not necessary for initial load but are required for the full widget experience.
    */
    onDashboardLoaded?: () => void;
    /**
    * The framework calls this method to determine if the widget should be disabled for users with stakeholder license
    * @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
    * @returns A boolean wrapped in a promise that determines if the widget should be disabled for users with stakeholder license
    */
    disableWidgetForStakeholders?: (widgetSettings: WidgetSettings) => IPromise<boolean>;
    /**
     *  Run widget in lightboxed mode
     *  @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
     *  @param {LightboxSize} size of the lightbox
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *          when this calls are completed and the experience is done loading.
     */
    lightbox?: (widgetSettings: WidgetSettings, lightboxSize: Size) => IPromise<WidgetStatus>;
    /**
    *  Listen to message from host
    * @param {string} type of event
    * @param {eventArgs} arguments associated with the event.
    */
    listen?: <T>(event: string, eventArgs: EventArgs<T>) => void;
}
/**
 * Configurable widgets implement this interface
 */
export interface IConfigurableWidget extends IWidget {
    /**
     *  When the configuration view is changed, the widget is expected to update its view.
     *  @param {WidgetSettings} the latest widget settings as available from the configuration view for the widget.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     */
    reload: (newWidgetSettings: WidgetSettings) => IPromise<WidgetStatus>;
}
/**
 * Widget authors implement this interface for their configuration.
 */
export interface IWidgetConfiguration {
    /**
     *  Called by the host to setup the widget configuration, which uses the settings shared with the widget to complete its rendering experience.
     *  @param {WidgetSettings} settings of the widget as shared with the configuration.
     *  @param {IWidgetConfigurationContext} widgetConfigurationContext provided by the host of the widget configuration to allow for communication.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *           If load fails, returns error message via WidgetStatusHelper.Failure(errorMessage).
     */
    load: (widgetSettings: WidgetSettings, widgetConfigurationContext: IWidgetConfigurationContext) => IPromise<WidgetStatus>;
    /**
     * Called by the host when the user clicks on the Save button.
     * Widget author is expected to run validations if needed.
     * If ready to save, then use WidgetHelpers.WidgetConfigurationSave.Valid() to return the serialized custom settings of the widget from the configuraton.
     * If custom settings are not valid and so not ready to save, then  use WidgetHelpers.WidgetConfigurationSave.Invalid() to notify the host to stop save.
     * @returns object of type SaveStatus wrapped in a promise.
     */
    onSave: () => IPromise<SaveStatus>;
    /**
     * (Optional) Called by the host when the configuration is ready to be saved (when the user clicks the save button on the configuration panel)
     */
    onSaveComplete?: () => void;
    /**
    *  Listen to message from host
    * @param {string} type of event
    * @param {eventArgs} arguments associated with the event.
    */
    listen?: <T>(event: string, eventArgs: EventArgs<T>) => void;
}
/**
* The result of a notification being made by a widget configuration.
*/
export interface NotifyResult {
    /**
    * Gets a response from the subscriber of the notification, if they provide one as part of the schema for the event.
    * @returns A promise with the data representing the return payload serialized as a string.
    */
    getResponse(): IPromise<string>;
}
/**
* Arguments associated with an event being passed by a widget or configurations.
*/
export interface EventArgs<T> {
    /**
    * Data relevant to the event.
    */
    data: T;
}
/**
 * Interface for the object passed to the widget configuration to communicate with its host.
 */
export interface IWidgetConfigurationContext {
    /**
    * The widget configuration calls this method when it wants to notify any of the WidgetEvents to the host
    * @param {string} type of event
    * @param {eventArgs} arguments associated with the event.
    * @returns a promise with the result of the notification. If arguments are malformed, the promise will be rejected. If multiple notifications are made for the same event
    * only the promise for the latest notification is resolved and the rest are treated as stale. The subscriber of the notification can send back information in a serialized form.
    */
    notify: <T>(event: string, eventArgs: EventArgs<T>) => IPromise<NotifyResult>;
}
/**
* Interface for the object passed to the host when user clicks on the Save button in the configuration pane
*/
export interface SaveStatus {
    /**
    * The custom settings to save
    */
    customSettings?: CustomSettings;
    /**
    * Indicates validity of the customSettings. If false, then user will be shown a generic error message and settings will not be saved.
    */
    isValid: boolean;
}
/**
 * Size of lightbox to draw widget in
 */
export interface Size {
    /**
     * width in pixels
     */
    width: number;
    /**
     * height in pixels
     */
    height: number;
}
}
declare module "TFS/Dashboards/WidgetHelpers" {
import TFS_Dashboards_WidgetContracts = require("TFS/Dashboards/WidgetContracts");
/**
 * Loads widget styles for the author into the iframe.
 * @returns a promise for when the styles are done loading into the frame.
 */
export function IncludeWidgetStyles(): IPromise<any>;
/**
 * Loads widget configuration styles for the author into the iframe.
 * @returns a promise for when the styles are done loading into the frame.
 */
export function IncludeWidgetConfigurationStyles(): IPromise<any>;
export class WidgetStatusHelper {
    /**
     * method to encapsulate a successful result for a widget loading operation (load, reload, openLightbox etc)
     * @param state any state information to be passed to the initiator of the loading call.
     * @param title title for the lightbox of a widget when available.
     * @returns promise encapsulating the status of the widget loading operations.
     */
    static Success(state?: string): IPromise<TFS_Dashboards_WidgetContracts.WidgetStatus>;
    /**
     * method to encapsulate a failed result for a widget loading operation (load, reload, openLightbox etc)
     * @param message message to display as part within the widget error experience.
     * @param isUserVisible indicates whether the message should be displayed to the user or a generic error message displayed. Defaults to true.
     * @param isRichtText indicates whether the message is an html that can be rendered as a rich experience. Defaults to false. Only trusted extensions are
     * allowed to set this to true. For any 3rd party widgets passing this value as true, it will be ignored.
     * @returns promise encapsulating the status of the widget loading operations.
     */
    static Failure(message: string, isUserVisible?: boolean, isRichtText?: boolean): IPromise<TFS_Dashboards_WidgetContracts.WidgetStatus>;
    /**
     * method to encapsulate a result for a widget loading operation that results in the widget being in an unconfigured state.
     * @returns promise encapsulating the status of the widget loading operations.
     */
    static Unconfigured(): IPromise<TFS_Dashboards_WidgetContracts.WidgetStatus>;
}
export class WidgetConfigurationSave {
    /**
     * method to encapsulate a valid state that is returned by the widget configuration
     * @param customSettings settings from the widget configuration to be returned as part of this state.
     * @returns promise encapsulating the state being returned.
     */
    static Valid(customSettings: TFS_Dashboards_WidgetContracts.CustomSettings): IPromise<TFS_Dashboards_WidgetContracts.SaveStatus>;
    /**
     * method to encapsulate an invalid state that is returned by the widget configuration
     * @returns promise encapsulating the state being returned.
     */
    static Invalid(): IPromise<TFS_Dashboards_WidgetContracts.SaveStatus>;
}
export class WidgetEvent {
    /**
    * Configuration has changed. When this event is notified, the preview is updated and Save button is enabled.
    */
    static ConfigurationChange: string;
    /**
    * Lightbox finished resizing. When this event is notified, the lightbox is done resizing.
    */
    static LightboxResized: string;
    static LightboxOptions: string;
    /**
    * Widget configuration general settings changed
    */
    static GeneralSettingsChanged: string;
    static Args<T>(payload: T): TFS_Dashboards_WidgetContracts.EventArgs<T>;
}
export class WidgetSizeConverter {
    /**
    * Cell width of the grid that is used to draw the widgets, this includes the border around the widget (i.e. this is the size of the div, border included)
    */
    private static CellWidth;
    /**
    * Cell height of the grid that is used to draw the widgets, this includes the border around the widget (i.e. this is the size of the div, border included)
    */
    private static CellHeight;
    /**
    * Cell gutter width between the cells that is used to draw the widget, this excludes the border around the widget (i.e. this is distance between widgets)
    */
    private static CellMarginWidth;
    /**
    * Cell gutter height between the cells that is used to draw the widget, this excludes the border around the widget  (i.e. this is distance between widgets)
    */
    private static CellMarginHeight;
    /**
    * Calculates a dimension in pixels, given widget cell size and grid dimensions
    * @returns size in pixels
    */
    private static CalculatePixelSize(cellCount, gridCellSize, gridMarginSize);
    /**
    * @returns width in pixels for 1x1 widget
    */
    static GetWidgetWidth(): number;
    /**
    * @returns height in pixels for 1x1 widget
    */
    static GetWidgetHeight(): number;
    /**
    * @returns width in pixels for widget gutter
    */
    static GetWidgetMarginWidth(): number;
    /**
    *  @returns height in pixels for widget gutter
    */
    static GetWidgetMarginHeight(): number;
    /**
    * Converts widget column span into pixels
    * @returns width in pixels
    */
    static ColumnsToPixelWidth(columnSpan: number): number;
    /**
    * Converts widget row span into pixels
    * @returns height in pixels
    */
    static RowsToPixelHeight(rowSpan: number): number;
}
}
declare module "TFS/DistributedTaskCommon/Contracts" {
/**
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 *
 * See following wiki page for instructions on how to regenerate:
 *   https://vsowiki.com/index.php?title=Rest_Client_Generation
 */
export interface DataSourceBindingBase {
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
export interface ProcessParameters {
    dataSourceBindings: DataSourceBindingBase[];
    inputs: TaskInputDefinitionBase[];
    sourceDefinitions: TaskSourceDefinitionBase[];
}
export interface TaskInputDefinitionBase {
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    properties: {
        [key: string]: string;
    };
    required: boolean;
    type: string;
    visibleRule: string;
}
export interface TaskSourceDefinitionBase {
    authKey: string;
    endpoint: string;
    keySelector: string;
    selector: string;
    target: string;
}
}
declare module "TFS/DistributedTask/Contracts" {
import TFS_DistributedTask_Common_Contracts = require("TFS/DistributedTaskCommon/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
export interface AgentChangeEvent {
    agent: TaskAgent;
    eventType: string;
    pool: TaskAgentPoolReference;
    poolId: number;
    timeStamp: Date;
}
export interface AgentJobRequestMessage extends JobRequestMessage {
    lockedUntil: Date;
    lockToken: string;
    requestId: number;
    tasks: TaskInstance[];
}
export interface AgentMigrationMessage {
    accessToken: string;
}
export interface AgentPoolEvent {
    eventType: string;
    pool: TaskAgentPool;
}
export interface AgentQueueEvent {
    eventType: string;
    queue: TaskAgentQueue;
}
export interface AgentRefreshMessage {
    agentId: number;
    timeout: any;
}
export interface AgentRequestEvent {
    eventType: string;
    planId: string;
    poolId: number;
    reservedAgentId: number;
    result: TaskResult;
    timeStamp: Date;
}
export interface AuthorizationHeader {
    name: string;
    value: string;
}
export interface AzureSpnOperationStatus {
    state: string;
    statusMessage: string;
}
export interface AzureSubscription {
    displayName: string;
    subscriptionId: string;
    subscriptionTenantId: string;
    subscriptionTenantName: string;
}
export interface AzureSubscriptionQueryResult {
    errorMessage: string;
    value: AzureSubscription[];
}
export interface DataSource {
    endpointUrl: string;
    name: string;
    resultSelector: string;
}
export interface DataSourceBinding extends TFS_DistributedTask_Common_Contracts.DataSourceBindingBase {
}
export interface DataSourceDetails {
    dataSourceName: string;
    dataSourceUrl: string;
    parameters: {
        [key: string]: string;
    };
    resultSelector: string;
}
export interface DependencyBinding {
    key: string;
    value: string;
}
export interface DependsOn {
    input: string;
    map: DependencyBinding[];
}
export interface DeploymentMachine {
    agent: TaskAgentReference;
    tags: string[];
}
export interface DeploymentMachineGroup extends DeploymentMachineGroupReference {
    machines: DeploymentMachine[];
    size: number;
}
export interface DeploymentMachineGroupReference {
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    projectId: string;
}
export interface DeploymentMachinesChangeEvent {
    machineGroupReference: DeploymentMachineGroupReference;
    machines: DeploymentMachine[];
}
export interface DeploymentMachineGroupReference {
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    projectId: string;
}
export interface DeploymentMachinesChangeEvent {
    machineGroupReference: DeploymentMachineGroupReference;
    machines: DeploymentMachine[];
}
export interface EndpointAuthorization {
    parameters: {
        [key: string]: string;
    };
    scheme: string;
}
export interface EndpointUrl {
    dependsOn: DependsOn;
    displayName: string;
    helpText: string;
    isVisible: string;
    value: string;
}
export interface HelpLink {
    text: string;
    url: string;
}
export interface Issue {
    category: string;
    data: {
        [key: string]: string;
    };
    message: string;
    type: IssueType;
}
export enum IssueType {
    Error = 1,
    Warning = 2,
}
export interface JobAssignedEvent extends JobEvent {
    request: TaskAgentJobRequest;
}
export interface JobCancelMessage {
    jobId: string;
    timeout: any;
}
export interface JobCompletedEvent extends JobEvent {
    requestId: number;
    result: TaskResult;
}
/**
 * Represents the context of variables and vectors for a job request.
 */
export interface JobEnvironment {
    endpoints: ServiceEndpoint[];
    mask: MaskHint[];
    options: {
        [key: string]: JobOption;
    };
    /**
     * Gets or sets the endpoint used for communicating back to the calling service.
     */
    systemConnection: ServiceEndpoint;
    variables: {
        [key: string]: string;
    };
}
export interface JobEvent {
    jobId: string;
    name: string;
}
export interface JobEventConfig {
    timeout: string;
}
export interface JobEventsConfig {
    jobAssigned: JobEventConfig;
    jobCompleted: JobEventConfig;
    jobStarted: JobEventConfig;
}
/**
 * Represents an option that may affect the way an agent runs the job.
 */
export interface JobOption {
    data: {
        [key: string]: string;
    };
    /**
     * Gets the id of the option.
     */
    id: string;
}
export interface JobRequestMessage {
    environment: JobEnvironment;
    jobId: string;
    jobName: string;
    messageType: string;
    plan: TaskOrchestrationPlanReference;
    timeline: TimelineReference;
}
export interface JobStartedEvent extends JobEvent {
}
export enum MachineGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface MaskHint {
    type: MaskType;
    value: string;
}
export enum MaskType {
    Variable = 1,
    Regex = 2,
}
export interface MetaTaskDefinition extends TaskDefinition {
    owner: string;
    tasks: MetaTaskStep[];
}
export interface MetaTaskStep {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    task: TaskDefinitionReference;
    timeoutInMinutes: number;
}
/**
 * Represents a downloadable package.
 */
export interface PackageMetadata {
    /**
     * The date the package was created
     */
    createdOn: Date;
    /**
     * A direct link to download the package.
     */
    downloadUrl: string;
    /**
     * The UI uses this to display instructions, i.e. "unzip MyAgent.zip"
     */
    filename: string;
    /**
     * MD5 hash as a base64 string
     */
    hashValue: string;
    /**
     * A link to documentation
     */
    infoUrl: string;
    /**
     * The platform (win7, linux, etc.)
     */
    platform: string;
    /**
     * The type of package (e.g. "agent")
     */
    type: string;
    /**
     * The package version.
     */
    version: PackageVersion;
}
export interface PackageVersion {
    major: number;
    minor: number;
    patch: number;
}
export interface PlanEnvironment {
    mask: MaskHint[];
    options: {
        [key: string]: JobOption;
    };
    variables: {
        [key: string]: string;
    };
}
export interface ResultTransformationDetails {
    resultTemplate: string;
}
export interface SendJobResponse {
    events: JobEventsConfig;
    variables: {
        [key: string]: string;
    };
}
export interface ServerExecutionDefinition {
    events: JobEventsConfig;
}
export interface ServerJobRequestMessage extends JobRequestMessage {
    taskDefinition: TaskDefinition;
    taskInstance: TaskInstance;
}
/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export interface ServiceEndpoint {
    administratorsGroup: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets the authorization data for talking to the endpoint.
     */
    authorization: EndpointAuthorization;
    /**
     * The Gets or sets Identity reference for the user who created the Service endpoint
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    data: {
        [key: string]: string;
    };
    /**
     * Gets or Sets description of endpoint
     */
    description: string;
    groupScopeId: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id: string;
    /**
     * EndPoint state indictor
     */
    isReady: boolean;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name: string;
    /**
     * Error message during creation/deletion of endpoint
     */
    operationStatus: any;
    readersGroup: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets the type of the endpoint.
     */
    type: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url: string;
}
export interface ServiceEndpointAuthenticationScheme {
    authorizationHeaders: AuthorizationHeader[];
    displayName: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    scheme: string;
}
export interface ServiceEndpointDetails {
    authorization: EndpointAuthorization;
    data: {
        [key: string]: string;
    };
    type: string;
    url: string;
}
export interface ServiceEndpointRequest {
    dataSourceDetails: DataSourceDetails;
    resultTransformationDetails: ResultTransformationDetails;
    serviceEndpointDetails: ServiceEndpointDetails;
}
export interface ServiceEndpointRequestResult {
    errorMessage: string;
    result: any;
    statusCode: string;
}
export interface ServiceEndpointType {
    authenticationSchemes: ServiceEndpointAuthenticationScheme[];
    dataSources: DataSource[];
    description: string;
    displayName: string;
    endpointUrl: EndpointUrl;
    helpLink: HelpLink;
    helpMarkDown: string;
    iconUrl: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
}
export interface TaskAgent extends TaskAgentReference {
    /**
     * Gets the request which is currently assigned to this agent.
     */
    assignedRequest: TaskAgentJobRequest;
    /**
     * Gets or sets the authorization information for this agent.
     */
    authorization: TaskAgentAuthorization;
    /**
     * Gets the date on which this agent was created.
     */
    createdOn: Date;
    /**
     * Gets or sets the maximum job parallelism allowed on this host.
     */
    maxParallelism: number;
    properties: any;
    /**
     * Gets the date on which the last connectivity status change occurred.
     */
    statusChangedOn: Date;
    systemCapabilities: {
        [key: string]: string;
    };
    userCapabilities: {
        [key: string]: string;
    };
}
/**
 * Provides data necessary for authorizing the agent using OAuth 2.0 authentication flows.
 */
export interface TaskAgentAuthorization {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl: string;
    /**
     * Gets or sets the client identifier for this agent.
     */
    clientId: string;
    /**
     * Gets or sets the public key used to verify the identity of this agent.
     */
    publicKey: TaskAgentPublicKey;
}
export interface TaskAgentJobRequest {
    assignTime: Date;
    definition: TaskOrchestrationOwner;
    demands: any[];
    finishTime: Date;
    hostId: string;
    jobId: string;
    jobName: string;
    lockedUntil: Date;
    matchedAgents: TaskAgentReference[];
    owner: TaskOrchestrationOwner;
    planId: string;
    planType: string;
    queueTime: Date;
    receiveTime: Date;
    requestId: number;
    reservedAgent: TaskAgentReference;
    result: TaskResult;
    scopeId: string;
    serviceOwner: string;
}
/**
 * Provides a contract for receiving messages from the task orchestrator.
 */
export interface TaskAgentMessage {
    /**
     * Gets or sets the body of the message. If the IV property is provided the body will need to be decrypted using the TaskAgentSession.EncryptionKey value in addition to the IV.
     */
    body: string;
    /**
     * Gets or sets the intialization vector used to encrypt this message.
     */
    iV: number[];
    /**
     * Gets or sets the message identifier.
     */
    messageId: number;
    /**
     * Gets or sets the message type, describing the data contract found in TaskAgentMessage.Body.
     */
    messageType: string;
}
export interface TaskAgentPool extends TaskAgentPoolReference {
    /**
     * Gets the administrators group for this agent pool.
     */
    administratorsGroup: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.
     */
    autoProvision: boolean;
    /**
     * Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the date/time of the pool creation.
     */
    createdOn: Date;
    /**
     * Gets the scope identifier for groups/roles which are owned by this pool.
     */
    groupScopeId: string;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted: boolean;
    properties: any;
    /**
     * Gets a value indicating whether or not roles have been provisioned for this pool.
     */
    provisioned: boolean;
    /**
     * Gets the service accounts group for this agent pool.
     */
    serviceAccountsGroup: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the current size of the pool.
     */
    size: number;
}
export enum TaskAgentPoolActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface TaskAgentPoolReference {
    id: number;
    name: string;
    /**
     * Gets or sets the type of the pool
     */
    poolType: TaskAgentPoolType;
    scope: string;
}
export enum TaskAgentPoolType {
    Automation = 1,
    Deployment = 2,
}
/**
 * Represents the public key portion of an RSA asymmetric key.
 */
export interface TaskAgentPublicKey {
    /**
     * Gets or sets the exponent for the public key.
     */
    exponent: number[];
    /**
     * Gets or sets the modulus for the public key.
     */
    modulus: number[];
}
export interface TaskAgentQueue {
    groupScopeId: string;
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    projectId: string;
    provisioned: boolean;
}
export enum TaskAgentQueueActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface TaskAgentReference {
    _links: any;
    /**
     * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
     */
    enabled: boolean;
    /**
     * Gets the identifier of the agent.
     */
    id: number;
    /**
     * Gets the name of the agent.
     */
    name: string;
    /**
     * Gets the current connectivity status of the agent.
     */
    status: TaskAgentStatus;
    /**
     * Gets the version of the agent.
     */
    version: string;
}
/**
 * Represents a session for performing message exchanges from an agent.
 */
export interface TaskAgentSession {
    /**
     * Gets or sets the agent which is the target of the session.
     */
    agent: TaskAgentReference;
    /**
     * Gets the key used to encrypt message traffic for this session.
     */
    encryptionKey: TaskAgentSessionKey;
    /**
     * Gets or sets the owner name of this session. Generally this will be the machine of origination.
     */
    ownerName: string;
    /**
     * Gets the unique identifier for this session.
     */
    sessionId: string;
    systemCapabilities: {
        [key: string]: string;
    };
}
/**
 * Represents a symmetric key used for message-level encryption for communication sent to an agent.
 */
export interface TaskAgentSessionKey {
    /**
     * Gets or sets a value indicating whether or not the key value is encrypted. If this value is true, the property should be decrypted using the RSA key exchanged with the server during registration.
     */
    encrypted: boolean;
    /**
     * Gets or sets the symmetric key value.
     */
    value: number[];
}
export enum TaskAgentStatus {
    Offline = 1,
    Online = 2,
}
export interface TaskAttachment {
    _links: any;
    createdOn: Date;
    lastChangedBy: string;
    lastChangedOn: Date;
    name: string;
    recordId: string;
    timelineId: string;
    type: string;
}
export interface TaskChangeEvent {
}
export interface TaskDefinition {
    agentExecution: TaskExecution;
    author: string;
    category: string;
    contentsUploaded: boolean;
    contributionIdentifier: string;
    contributionVersion: string;
    dataSourceBindings: DataSourceBinding[];
    definitionType: string;
    demands: any[];
    description: string;
    disabled: boolean;
    execution: {
        [key: string]: any;
    };
    friendlyName: string;
    groups: TaskGroupDefinition[];
    helpMarkDown: string;
    hostType: string;
    iconUrl: string;
    id: string;
    inputs: TaskInputDefinition[];
    instanceNameFormat: string;
    minimumAgentVersion: string;
    name: string;
    packageLocation: string;
    packageType: string;
    preview: boolean;
    releaseNotes: string;
    runsOn: string[];
    serverOwned: boolean;
    sourceDefinitions: TaskSourceDefinition[];
    sourceLocation: string;
    version: TaskVersion;
    visibility: string[];
}
export interface TaskDefinitionEndpoint {
    /**
     * An ID that identifies a service connection to be used for authenticating endpoint requests.
     */
    connectionId: string;
    /**
     * An Json based keyselector to filter response returned by fetching the endpoint Url.A Json based keyselector must be prefixed with "jsonpath:". KeySelector can be used to specify the filter to get the keys for the values specified with Selector.  The following keyselector defines an Json for extracting nodes named 'ServiceName'.  endpoint.KeySelector = "jsonpath://ServiceName";
     */
    keySelector: string;
    /**
     * The scope as understood by Connected Services. Essentialy, a project-id for now.
     */
    scope: string;
    /**
     * An XPath/Json based selector to filter response returned by fetching the endpoint Url. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "jsonpath:".  The following selector defines an XPath for extracting nodes named 'ServiceName'.  endpoint.Selector = "xpath://ServiceName";
     */
    selector: string;
    /**
     * TaskId that this endpoint belongs to.
     */
    taskId: string;
    /**
     * URL to GET.
     */
    url: string;
}
export interface TaskDefinitionReference {
    definitionType: string;
    id: string;
    versionSpec: string;
}
export enum TaskDefinitionStatus {
    Preinstalled = 1,
    ReceivedInstallOrUpdate = 2,
    Installed = 3,
    ReceivedUninstall = 4,
    Uninstalled = 5,
    RequestedUpdate = 6,
    Updated = 7,
    AlreadyUpToDate = 8,
    InlineUpdateReceived = 9,
}
export interface TaskExecution {
    /**
     * The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline
     */
    execTask: TaskReference;
    /**
     * If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } net20: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } java: { jar: "powershelltask.tasks.automation.teamfoundation.microsoft.com", } node: { script: "powershellhost.js", }
     */
    platformInstructions: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export interface TaskGroup extends TaskDefinition {
    owner: string;
    tasks: TaskGroupStep[];
}
export interface TaskGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
    tags: string[];
}
export interface TaskGroupStep {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    task: TaskDefinitionReference;
    timeoutInMinutes: number;
}
export interface TaskHubLicenseDetails {
    enterpriseUsersCount: number;
    freeLicenseCount: number;
    hasLicenseCountEverUpdated: boolean;
    msdnUsersCount: number;
    purchasedLicenseCount: number;
    totalLicenseCount: number;
}
export interface TaskInputDefinition extends TFS_DistributedTask_Common_Contracts.TaskInputDefinitionBase {
}
export interface TaskInstance extends TaskReference {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    instanceId: string;
    timeoutInMinutes: number;
}
export interface TaskLog extends TaskLogReference {
    createdOn: Date;
    indexLocation: string;
    lastChangedOn: Date;
    lineCount: number;
    path: string;
}
export interface TaskLogReference {
    id: number;
    location: string;
}
export interface TaskOrchestrationContainer extends TaskOrchestrationItem {
    children: TaskOrchestrationItem[];
    continueOnError: boolean;
    data: {
        [key: string]: string;
    };
    maxConcurrency: number;
    parallel: boolean;
    rollback: TaskOrchestrationContainer;
}
export interface TaskOrchestrationItem {
    itemType: TaskOrchestrationItemType;
}
export enum TaskOrchestrationItemType {
    Container = 0,
    Job = 1,
}
export interface TaskOrchestrationJob extends TaskOrchestrationItem {
    demands: any[];
    executeAs: VSS_Common_Contracts.IdentityRef;
    executionMode: string;
    executionTimeout: any;
    instanceId: string;
    name: string;
    tasks: TaskInstance[];
    variables: {
        [key: string]: string;
    };
}
export interface TaskOrchestrationOwner {
    _links: any;
    id: number;
    name: string;
}
export interface TaskOrchestrationPlan extends TaskOrchestrationPlanReference {
    environment: PlanEnvironment;
    finishTime: Date;
    implementation: TaskOrchestrationContainer;
    planGroup: string;
    requestedById: string;
    requestedForId: string;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TaskOrchestrationPlanState;
    timeline: TimelineReference;
}
export interface TaskOrchestrationPlanReference {
    artifactLocation: string;
    artifactUri: string;
    planId: string;
    planType: string;
    scopeIdentifier: string;
    version: number;
}
export enum TaskOrchestrationPlanState {
    InProgress = 1,
    Queued = 2,
    Completed = 4,
}
export interface TaskPackageMetadata {
    /**
     * Gets the name of the package.
     */
    type: string;
    /**
     * Gets the url of the package.
     */
    url: string;
    /**
     * Gets the version of the package.
     */
    version: string;
}
export interface TaskReference {
    id: string;
    inputs: {
        [key: string]: string;
    };
    name: string;
    version: string;
}
export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
export interface TaskSourceDefinition extends TFS_DistributedTask_Common_Contracts.TaskSourceDefinitionBase {
}
export interface TaskVersion {
    isTest: boolean;
    major: number;
    minor: number;
    patch: number;
}
export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}
export interface TimelineRecord {
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    location: string;
    log: TaskLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    type: string;
    warningCount: number;
    workerName: string;
}
export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineReference {
    changeId: number;
    id: string;
    location: string;
}
export interface VariableGroup {
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    description: string;
    id: number;
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    modifiedOn: Date;
    name: string;
    variables: {
        [key: string]: VariableValue;
    };
}
export enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface VariableValue {
    isSecret: boolean;
    value: string;
}
export var TypeInfo: {
    AgentChangeEvent: any;
    AgentJobRequestMessage: any;
    AgentPoolEvent: any;
    AgentQueueEvent: any;
    AgentRequestEvent: any;
    DeploymentMachine: any;
    DeploymentMachineGroup: any;
    DeploymentMachineGroupReference: any;
    DeploymentMachinesChangeEvent: any;
    Issue: any;
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    JobAssignedEvent: any;
    JobCompletedEvent: any;
    JobEnvironment: any;
    JobRequestMessage: any;
    MachineGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    MaskHint: any;
    MaskType: {
        enumValues: {
            "variable": number;
            "regex": number;
        };
    };
    PackageMetadata: any;
    PlanEnvironment: any;
    ServerJobRequestMessage: any;
    ServiceEndpointAuthenticationScheme: any;
    ServiceEndpointRequestResult: any;
    ServiceEndpointType: any;
    TaskAgent: any;
    TaskAgentJobRequest: any;
    TaskAgentPool: any;
    TaskAgentPoolActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    TaskAgentPoolReference: any;
    TaskAgentPoolType: {
        enumValues: {
            "automation": number;
            "deployment": number;
        };
    };
    TaskAgentQueue: any;
    TaskAgentQueueActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    TaskAgentReference: any;
    TaskAgentSession: any;
    TaskAgentStatus: {
        enumValues: {
            "offline": number;
            "online": number;
        };
    };
    TaskAttachment: any;
    TaskDefinitionStatus: {
        enumValues: {
            "preinstalled": number;
            "receivedInstallOrUpdate": number;
            "installed": number;
            "receivedUninstall": number;
            "uninstalled": number;
            "requestedUpdate": number;
            "updated": number;
            "alreadyUpToDate": number;
            "inlineUpdateReceived": number;
        };
    };
    TaskLog: any;
    TaskOrchestrationContainer: any;
    TaskOrchestrationItem: any;
    TaskOrchestrationItemType: {
        enumValues: {
            "container": number;
            "job": number;
        };
    };
    TaskOrchestrationJob: any;
    TaskOrchestrationPlan: any;
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": number;
            "queued": number;
            "completed": number;
        };
    };
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    Timeline: any;
    TimelineRecord: any;
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    VariableGroup: any;
    VariableGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
};
}
declare module "TFS/DistributedTask/TaskAgentRestClient" {
import Contracts = require("TFS/DistributedTask/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    protected agentsApiVersion: string;
    protected azurermsubscriptionsApiVersion: string;
    protected endpointApiVersion: string;
    protected jobrequestsApiVersion: string;
    protected messagesApiVersion: string;
    protected poolsApiVersion: string;
    protected queuesApiVersion: string;
    protected serviceendpointtypesApiVersion: string;
    protected sessionsApiVersion: string;
    protected usercapabilitiesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    updateAgentUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @return IPromise<void>
     */
    deleteAgentSession(poolId: number, sessionId: string): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentSession} session
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentSession>
     */
    createAgentSession(session: Contracts.TaskAgentSession, poolId: number): IPromise<Contracts.TaskAgentSession>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} type
     * @param {string} scheme
     * @return IPromise<Contracts.ServiceEndpointType[]>
     */
    getServiceEndpointTypes(type?: string, scheme?: string): IPromise<Contracts.ServiceEndpointType[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} queueName
     * @param {Contracts.TaskAgentQueueActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentQueue[]>
     */
    getAgentQueues(project?: string, queueName?: string, actionFilter?: Contracts.TaskAgentQueueActionFilter): IPromise<Contracts.TaskAgentQueue[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     * @param {Contracts.TaskAgentQueueActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentQueue>
     */
    getAgentQueue(queueId: number, project?: string, actionFilter?: Contracts.TaskAgentQueueActionFilter): IPromise<Contracts.TaskAgentQueue>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteAgentQueue(queueId: number, project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    createTeamProject(project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TaskAgentQueue} queue
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskAgentQueue>
     */
    addAgentQueue(queue: Contracts.TaskAgentQueue, project?: string): IPromise<Contracts.TaskAgentQueue>;
    /**
     * @param {Contracts.TaskAgentPool} pool
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentPool>
     */
    updateAgentPool(pool: Contracts.TaskAgentPool, poolId: number): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {string} poolName
     * @param {string[]} properties
     * @param {Contracts.TaskAgentPoolType} poolType
     * @param {Contracts.TaskAgentPoolActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentPool[]>
     */
    getAgentPools(poolName?: string, properties?: string[], poolType?: Contracts.TaskAgentPoolType, actionFilter?: Contracts.TaskAgentPoolActionFilter): IPromise<Contracts.TaskAgentPool[]>;
    /**
     * @param {number} poolId
     * @param {string[]} properties
     * @param {Contracts.TaskAgentPoolActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentPool>
     */
    getAgentPool(poolId: number, properties?: string[], actionFilter?: Contracts.TaskAgentPoolActionFilter): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {number} poolId
     * @return IPromise<void>
     */
    deleteAgentPool(poolId: number): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentPool} pool
     * @return IPromise<Contracts.TaskAgentPool>
     */
    addAgentPool(pool: Contracts.TaskAgentPool): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {Contracts.TaskAgentMessage} message
     * @param {number} poolId
     * @param {number} requestId
     * @return IPromise<void>
     */
    sendMessage(message: Contracts.TaskAgentMessage, poolId: number, requestId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @return IPromise<void>
     */
    refreshAgents(poolId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<void>
     */
    refreshAgent(poolId: number, agentId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param {number} lastMessageId
     * @return IPromise<Contracts.TaskAgentMessage>
     */
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): IPromise<Contracts.TaskAgentMessage>;
    /**
     * @param {number} poolId
     * @param {number} messageId
     * @param {string} sessionId
     * @return IPromise<void>
     */
    deleteMessage(poolId: number, messageId: number, sessionId: string): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    updateAgentRequest(request: Contracts.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    queueAgentRequest(request: Contracts.TaskAgentJobRequest, poolId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {number} poolId
     * @param {string} planId
     * @param {string} jobId
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number[]} agentIds
     * @param {number} completedRequestCount
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {number} completedRequestCount
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    getAgentRequest(poolId: number, requestId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @return IPromise<void>
     */
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string): IPromise<void>;
    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
     * @return IPromise<string[]>
     */
    queryEndpoint(endpoint: Contracts.TaskDefinitionEndpoint): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @return IPromise<Contracts.AzureSubscriptionQueryResult>
     */
    getAzureSubscriptions(): IPromise<Contracts.AzureSubscriptionQueryResult>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    updateAgent(agent: Contracts.TaskAgent, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    replaceAgent(agent: Contracts.TaskAgent, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     * @param {string[]} demands
     * @return IPromise<Contracts.TaskAgent[]>
     */
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): IPromise<Contracts.TaskAgent[]>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     * @return IPromise<Contracts.TaskAgent>
     */
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<void>
     */
    deleteAgent(poolId: number, agentId: number): IPromise<void>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgent>
     */
    addAgent(agent: Contracts.TaskAgent, poolId: number): IPromise<Contracts.TaskAgent>;
}
export class CommonMethods2_1To3_1 extends CommonMethods2To3_1 {
    protected poolrolesApiVersion: string;
    protected queuerolesApiVersion: string;
    protected tasksApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} taskId
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @return IPromise<Contracts.TaskDefinition[]>
     */
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): IPromise<Contracts.TaskDefinition[]>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @return IPromise<Contracts.TaskDefinition>
     */
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): IPromise<Contracts.TaskDefinition>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @return IPromise<ArrayBuffer>
     */
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): IPromise<ArrayBuffer>;
    /**
     * @param {string} taskId
     * @return IPromise<void>
     */
    deleteTaskDefinition(taskId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} queueId
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getAgentQueueRoles(queueId?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} poolId
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getAgentPoolRoles(poolId?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
}
export class CommonMethods3To3_1 extends CommonMethods2_1To3_1 {
    protected hublicenseApiVersion: string;
    protected packagesApiVersion: string;
    protected serviceendpointproxyApiVersion: string;
    protected serviceendpointsApiVersion: string;
    protected taskgroupsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TaskGroup} taskGroup
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    updateTaskGroup(taskGroup: Contracts.TaskGroup, project: string): IPromise<Contracts.TaskGroup>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {boolean} expanded
     * @return IPromise<Contracts.TaskGroup[]>
     */
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean): IPromise<Contracts.TaskGroup[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @return IPromise<void>
     */
    deleteTaskGroup(project: string, taskGroupId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TaskGroup} taskGroup
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    addTaskGroup(taskGroup: Contracts.TaskGroup, project: string): IPromise<Contracts.TaskGroup>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, project: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(project: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(project: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, project: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, project: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, project: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {number} top
     * @return IPromise<Contracts.PackageMetadata[]>
     */
    getPackages(packageType?: string, platform?: string, top?: number): IPromise<Contracts.PackageMetadata[]>;
    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {string} version
     * @return IPromise<Contracts.PackageMetadata>
     */
    getPackage(packageType: string, platform: string, version: string): IPromise<Contracts.PackageMetadata>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TaskHubLicenseDetails} taskHubLicenseDetails
     * @param {string} hubName
     * @return IPromise<Contracts.TaskHubLicenseDetails>
     */
    updateTaskHubLicenseDetails(taskHubLicenseDetails: Contracts.TaskHubLicenseDetails, hubName: string): IPromise<Contracts.TaskHubLicenseDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} hubName
     * @param {boolean} includeEnterpriseUsersCount
     * @return IPromise<Contracts.TaskHubLicenseDetails>
     */
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean): IPromise<Contracts.TaskHubLicenseDetails>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachineGroup} machineGroup
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DeploymentMachineGroup>
     */
    addDeploymentMachineGroup(machineGroup: Contracts.DeploymentMachineGroup, project: string): IPromise<Contracts.DeploymentMachineGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<void>
     */
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @param {Contracts.MachineGroupActionFilter} actionFilter
     * @return IPromise<Contracts.DeploymentMachineGroup>
     */
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: Contracts.MachineGroupActionFilter): IPromise<Contracts.DeploymentMachineGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} machineGroupName
     * @param {Contracts.MachineGroupActionFilter} actionFilter
     * @return IPromise<Contracts.DeploymentMachineGroup[]>
     */
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: Contracts.MachineGroupActionFilter): IPromise<Contracts.DeploymentMachineGroup[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachineGroup} machineGroup
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<Contracts.DeploymentMachineGroup>
     */
    updateDeploymentMachineGroup(machineGroup: Contracts.DeploymentMachineGroup, project: string, machineGroupId: number): IPromise<Contracts.DeploymentMachineGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @param {string[]} tagFilters
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    getDeploymentMachines(project: string, machineGroupId: number, tagFilters?: string[]): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine[]} deploymentMachines
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    updateDeploymentMachines(deploymentMachines: Contracts.DeploymentMachine[], project: string, machineGroupId: number): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.VariableGroup} group
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.VariableGroup>
     */
    addVariableGroup(group: Contracts.VariableGroup, project: string): IPromise<Contracts.VariableGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} groupId
     * @return IPromise<void>
     */
    deleteVariableGroup(project: string, groupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} groupId
     * @return IPromise<Contracts.VariableGroup>
     */
    getVariableGroup(project: string, groupId: number): IPromise<Contracts.VariableGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} groupName
     * @param {Contracts.VariableGroupActionFilter} actionFilter
     * @return IPromise<Contracts.VariableGroup[]>
     */
    getVariableGroups(project: string, groupName?: string, actionFilter?: Contracts.VariableGroupActionFilter): IPromise<Contracts.VariableGroup[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} groupIds
     * @return IPromise<Contracts.VariableGroup[]>
     */
    getVariableGroupsById(project: string, groupIds: number[]): IPromise<Contracts.VariableGroup[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.VariableGroup} group
     * @param {string} project - Project ID or project name
     * @param {number} groupId
     * @return IPromise<Contracts.VariableGroup>
     */
    updateVariableGroup(group: Contracts.VariableGroup, project: string, groupId: number): IPromise<Contracts.VariableGroup>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    addMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @return IPromise<void>
     */
    deleteMetaTaskDefinition(project: string, metaTaskDefinitionId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @param {boolean} expanded
     * @return IPromise<Contracts.MetaTaskDefinition[]>
     */
    getMetaTaskDefinitions(project: string, metaTaskDefinitionId?: string, expanded?: boolean): IPromise<Contracts.MetaTaskDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    updateMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
}
export class TaskAgentHttpClient2_3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    addMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @return IPromise<void>
     */
    deleteMetaTaskDefinition(project: string, metaTaskDefinitionId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @param {boolean} expanded
     * @return IPromise<Contracts.MetaTaskDefinition[]>
     */
    getMetaTaskDefinitions(project: string, metaTaskDefinitionId?: string, expanded?: boolean): IPromise<Contracts.MetaTaskDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    updateMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * @return IPromise<Contracts.TaskPackageMetadata[]>
     */
    getPackages(): IPromise<Contracts.TaskPackageMetadata[]>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient2_2 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    addMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @return IPromise<void>
     */
    deleteMetaTaskDefinition(project: string, metaTaskDefinitionId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @param {boolean} expanded
     * @return IPromise<Contracts.MetaTaskDefinition[]>
     */
    getMetaTaskDefinitions(project: string, metaTaskDefinitionId?: string, expanded?: boolean): IPromise<Contracts.MetaTaskDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    updateMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * @return IPromise<Contracts.TaskPackageMetadata[]>
     */
    getPackages(): IPromise<Contracts.TaskPackageMetadata[]>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    addMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @return IPromise<void>
     */
    deleteMetaTaskDefinition(project: string, metaTaskDefinitionId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @param {boolean} expanded
     * @return IPromise<Contracts.MetaTaskDefinition[]>
     */
    getMetaTaskDefinitions(project: string, metaTaskDefinitionId?: string, expanded?: boolean): IPromise<Contracts.MetaTaskDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.MetaTaskDefinition>
     */
    updateMetaTaskDefinition(definition: Contracts.MetaTaskDefinition, project: string): IPromise<Contracts.MetaTaskDefinition>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * @return IPromise<Contracts.TaskPackageMetadata[]>
     */
    getPackages(): IPromise<Contracts.TaskPackageMetadata[]>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * @return IPromise<Contracts.TaskPackageMetadata[]>
     */
    getPackages(): IPromise<Contracts.TaskPackageMetadata[]>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient extends TaskAgentHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TaskAgentHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TaskAgentHttpClient3;
}
declare module "TFS/DistributedTask/TaskRestClient" {
import TFS_DistributedTask_Contracts = require("TFS/DistributedTask/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    protected feedApiVersion: string;
    protected logsApiVersion: string;
    protected plansApiVersion: string;
    protected recordsApiVersion: string;
    protected timelinesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline[]>
     */
    getTimelines(scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.Timeline[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {boolean} includeRecords
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline>
     */
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): IPromise<TFS_DistributedTask_Contracts.Timeline>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @return IPromise<void>
     */
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string): IPromise<void>;
    /**
     * @param {TFS_DistributedTask_Contracts.Timeline} timeline
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline>
     */
    createTimeline(timeline: TFS_DistributedTask_Contracts.Timeline, scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.Timeline>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<TFS_DistributedTask_Contracts.TimelineRecord[]>} records
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @return IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>
     */
    updateRecords(records: VSS_Common_Contracts.VssJsonCollectionWrapperV<TFS_DistributedTask_Contracts.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string): IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @return IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>
     */
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number): IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationPlan>
     */
    getPlan(scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationPlan>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog[]>
     */
    getLogs(scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.TaskLog[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @return IPromise<string[]>
     */
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number): IPromise<string[]>;
    /**
     * @param {TFS_DistributedTask_Contracts.TaskLog} log
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog>
     */
    createLog(log: TFS_DistributedTask_Contracts.TaskLog, scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.TaskLog>;
    /**
     * @param {string} content - Content to upload
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog>
     */
    appendLogContent(content: string, scopeIdentifier: string, hubName: string, planId: string, logId: number): IPromise<TFS_DistributedTask_Contracts.TaskLog>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<string[]>} lines
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @return IPromise<void>
     */
    appendTimelineRecordFeed(lines: VSS_Common_Contracts.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string): IPromise<void>;
}
export class CommonMethods2_1To3_1 extends CommonMethods2To3_1 {
    protected attachmentsApiVersion: string;
    protected attachmentsApiVersion_eb55e5d6: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>
     */
    getAttachments(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentContent(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment>
     */
    getAttachment(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment>;
    /**
     * [Preview API]
     *
     * @param {string} content - Content to upload
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment>
     */
    createAttachment(content: string, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} type
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>
     */
    getPlanAttachments(scopeIdentifier: string, hubName: string, planId: string, type: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>;
}
/**
 * @exemptedapi
 */
export class TaskHttpClient3_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2_3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2_2 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class TaskHttpClient extends TaskHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TaskHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TaskHttpClient3;
}
declare module "TFS/TestImpact/Contracts" {
export enum BuildType {
    TestImpactOff = 0,
    BaseLine = 1,
    TestImpactOn = 2,
}
/**
 * Represents a code change in a build.
 */
export interface CodeChange {
    /**
     * Gets or sets the name of the assembly containing the change.
     */
    assemblyName: string;
    /**
     * Gets or sets the signature of the code that changed.
     */
    codeSignature: string;
    /**
     * Gets or sets the file name containing the code change.
     */
    fileName: string;
    /**
     * Gets or sets the name of the code that changed.
     */
    name: string;
    /**
     * Gets or sets the signature type of the code that changed.
     */
    signatureType: SignatureType;
}
/**
 * Represents a definition run information.
 */
export interface DefinitionRunInfo {
    /**
     * Gets or sets the signature of the code that changed.
     */
    baseLineDefinitionRunId: number;
    /**
     * Gets or sets the name of the assembly containing the change.
     */
    definitionRunId: number;
    /**
     * Gets or sets the name of the code that changed.
     */
    definitionType: DefinitionType;
}
export enum DefinitionType {
    Build = 0,
    Release = 1,
}
export interface ImpactedTests {
    areAllTestsImpacted: boolean;
    tests: Test[];
}
export enum SignatureType {
    Method = 0,
    File = 1,
    Assembly = 2,
}
export interface Test {
    /**
     * Gets the automated test identifier.
     */
    automatedTestId: string;
    testCaseId: number;
    /**
     * Gets or sets the name of the test.
     */
    testName: string;
}
/**
 * Represents test impact data for a build.
 */
export interface TestImpactBuildData {
    codeChanges: CodeChange[];
    rebaseLimit: number;
}
export enum TestInclusionOptions {
    None = 0,
    Failed = 1,
}
/**
 * Represents a test result's code signature indexes.
 */
export interface TestResultSignatures {
    /**
     * Gets or sets the configuration identifier.
     */
    configurationId: number;
    /**
     * List of signatues associated with the test case
     */
    signatures: string[];
    /**
     * Type of the signature
     */
    signatureType: SignatureType;
    /**
     * Gets or sets the test result identifier.
     */
    testResultId: number;
}
export interface TestResultSignaturesInfo {
    /**
     * Gets or sets the type of the definition.
     */
    definitionType: DefinitionType;
    /**
     * Gets or sets the run id.
     */
    runId: number;
    /**
     * Gets or sets the signature of the code that changed.
     */
    testResultSignatures: TestResultSignatures[];
}
export var TypeInfo: {
    BuildType: {
        enumValues: {
            "testImpactOff": number;
            "baseLine": number;
            "testImpactOn": number;
        };
    };
    CodeChange: any;
    DefinitionRunInfo: any;
    DefinitionType: {
        enumValues: {
            "build": number;
            "release": number;
        };
    };
    SignatureType: {
        enumValues: {
            "method": number;
            "file": number;
            "assembly": number;
        };
    };
    TestImpactBuildData: any;
    TestInclusionOptions: {
        enumValues: {
            "none": number;
            "failed": number;
        };
    };
    TestResultSignatures: any;
    TestResultSignaturesInfo: any;
};
}
declare module "TFS/TestImpact/RestClient" {
import Contracts = require("TFS/TestImpact/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected changeApiVersion: string;
    protected impactApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionRunInfo} definitionRunInfo
     * @param {number} currentTestRunId
     * @param {Contracts.TestInclusionOptions} typesToInclude
     * @return IPromise<Contracts.ImpactedTests>
     */
    queryImpactedTests(project: string, definitionRunInfo: Contracts.DefinitionRunInfo, currentTestRunId: number, typesToInclude?: Contracts.TestInclusionOptions): IPromise<Contracts.ImpactedTests>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.BuildType>
     */
    queryBuildType(project: string, buildId: number): IPromise<Contracts.BuildType>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TestResultSignaturesInfo} results
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    publishCodeSignatures(results: Contracts.TestResultSignaturesInfo, project: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionRunInfo} definitionRunInfo
     * @return IPromise<Contracts.TestImpactBuildData>
     */
    queryCodeChanges(project: string, definitionRunInfo: Contracts.DefinitionRunInfo): IPromise<Contracts.TestImpactBuildData>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TestImpactBuildData} testImapctBuildData
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionRunInfo} definitionRunInfo
     * @return IPromise<void>
     */
    publishTestImpactBuildData(testImapctBuildData: Contracts.TestImpactBuildData, project: string, definitionRunInfo: Contracts.DefinitionRunInfo): IPromise<void>;
}
/**
 * @exemptedapi
 */
export class TestHttpClient3_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class TestHttpClient extends TestHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TestHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TestHttpClient3;
}
declare module "TFS/TestManagement/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AggregatedDataForResultTrend {
    /**
     * This is tests execution duration.
     */
    duration: any;
    resultsByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
    testResultsContext: TestResultsContext;
    totalTests: number;
}
export interface AggregatedResultsAnalysis {
    duration: any;
    previousContext: TestResultsContext;
    resultsByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
    resultsDifference: AggregatedResultsDifference;
    totalTests: number;
}
export interface AggregatedResultsByOutcome {
    count: number;
    duration: any;
    outcome: TestOutcome;
}
export interface AggregatedResultsDifference {
    increaseInDuration: any;
    increaseInFailures: number;
    increaseInOtherTests: number;
    increaseInPassedTests: number;
    increaseInTotalTests: number;
}
export enum AttachmentType {
    GeneralAttachment = 0,
    AfnStrip = 1,
    BugFilingData = 2,
    CodeCoverage = 3,
    IntermediateCollectorData = 4,
    RunConfig = 5,
    TestImpactDetails = 6,
    TmiTestRunDeploymentFiles = 7,
    TmiTestRunReverseDeploymentFiles = 8,
    TmiTestResultDetail = 9,
    TmiTestRunSummary = 10,
    ConsoleLog = 11,
}
export interface BatchResponse {
    error: string;
    responses: Response[];
    status: string;
}
export interface BuildConfiguration {
    branchName: string;
    buildDefinitionId: number;
    flavor: string;
    id: number;
    number: string;
    platform: string;
    project: ShallowReference;
    repositoryId: number;
    sourceVersion: string;
    uri: string;
}
export interface BuildCoverage {
    codeCoverageFileUrl: string;
    configuration: BuildConfiguration;
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
}
export interface BuildReference {
    branchName: string;
    buildSystem: string;
    definitionId: number;
    id: number;
    number: string;
    repositoryId: string;
    uri: string;
}
export interface CloneOperationInformation {
    cloneStatistics: CloneStatistics;
    /**
     * If the operation is complete, the DateTime of completion. If operation is not complete, this is DateTime.MaxValue
     */
    completionDate: Date;
    /**
     * DateTime when the operation was started
     */
    creationDate: Date;
    /**
     * Shallow reference of the destination
     */
    destinationObject: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationPlan: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationProject: ShallowReference;
    /**
     * If the operation has Failed, Message contains the reason for failure. Null otherwise.
     */
    message: string;
    /**
     * The ID of the operation
     */
    opId: number;
    /**
     * The type of the object generated as a result of the Clone operation
     */
    resultObjectType: ResultObjectType;
    /**
     * Shallow reference of the source
     */
    sourceObject: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourcePlan: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourceProject: ShallowReference;
    /**
     * Current state of the operation. When State reaches Suceeded or Failed, the operation is complete
     */
    state: CloneOperationState;
    /**
     * Url for geting the clone information
     */
    url: string;
}
export enum CloneOperationState {
    Failed = 2,
    InProgress = 1,
    Queued = 0,
    Succeeded = 3,
}
export interface CloneOptions {
    /**
     * If set to true requirements will be cloned
     */
    cloneRequirements: boolean;
    /**
     * copy all suites from a source plan
     */
    copyAllSuites: boolean;
    /**
     * copy ancestor hieracrchy
     */
    copyAncestorHierarchy: boolean;
    /**
     * Name of the workitem type of the clone
     */
    destinationWorkItemType: string;
    /**
     * Key value pairs where the key value is overridden by the value.
     */
    overrideParameters: {
        [key: string]: string;
    };
    /**
     * Comment on the link that will link the new clone  test case to the original Set null for no comment
     */
    relatedLinkComment: string;
}
export interface CloneStatistics {
    /**
     * Number of Requirments cloned so far.
     */
    clonedRequirementsCount: number;
    /**
     * Number of shared steps cloned so far.
     */
    clonedSharedStepsCount: number;
    /**
     * Number of test cases cloned so far
     */
    clonedTestCasesCount: number;
    /**
     * Total number of requirements to be cloned
     */
    totalRequirementsCount: number;
    /**
     * Total number of test cases to be cloned
     */
    totalTestCasesCount: number;
}
/**
 * Represents the build configuration (platform, flavor) and coverage data for the build
 */
export interface CodeCoverageData {
    /**
     * Flavor of build for which data is retrieved/published
     */
    buildFlavor: string;
    /**
     * Platform of build for which data is retrieved/published
     */
    buildPlatform: string;
    /**
     * List of coverage data for the build
     */
    coverageStats: CodeCoverageStatistics[];
}
/**
 * Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
 */
export interface CodeCoverageStatistics {
    /**
     * Covered units
     */
    covered: number;
    /**
     * Delta of coverage
     */
    delta: number;
    /**
     * Is delta valid
     */
    isDeltaAvailable: boolean;
    /**
     * Label of coverage data ("Blocks", "Statements", "Modules", etc.)
     */
    label: string;
    /**
     * Position of label
     */
    position: number;
    /**
     * Total units
     */
    total: number;
}
/**
 * Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
 */
export interface CodeCoverageSummary {
    /**
     * Uri of build for which data is retrieved/published
     */
    build: ShallowReference;
    /**
     * List of coverage data and details for the build
     */
    coverageData: CodeCoverageData[];
    /**
     * Uri of build against which difference in coverage is computed
     */
    deltaBuild: ShallowReference;
}
export enum CoverageQueryFlags {
    /**
     * If set, the Coverage.Modules property will be populated.
     */
    Modules = 1,
    /**
     * If set, the ModuleCoverage.Functions properties will be populated.
     */
    Functions = 2,
    /**
     * If set, the ModuleCoverage.CoverageData field will be populated.
     */
    BlockData = 4,
}
export interface CoverageStatistics {
    blocksCovered: number;
    blocksNotCovered: number;
    linesCovered: number;
    linesNotCovered: number;
    linesPartiallyCovered: number;
}
export interface CustomTestField {
    fieldName: string;
    value: any;
}
export interface CustomTestFieldDefinition {
    fieldId: number;
    fieldName: string;
    fieldType: CustomTestFieldType;
    scope: CustomTestFieldScope;
}
export enum CustomTestFieldScope {
    None = 0,
    TestRun = 1,
    TestResult = 2,
    System = 4,
    All = 7,
}
export enum CustomTestFieldType {
    Bit = 2,
    DateTime = 4,
    Int = 8,
    Float = 6,
    String = 12,
    Guid = 14,
}
/**
 * This is a temporary class to provide the details for the test run environment.
 */
export interface DtlEnvironmentDetails {
    csmContent: string;
    csmParameters: string;
    subscriptionName: string;
}
export interface FailingSince {
    build: BuildReference;
    date: Date;
    release: ReleaseReference;
}
export interface FunctionCoverage {
    class: string;
    name: string;
    namespace: string;
    sourceFile: string;
    statistics: CoverageStatistics;
}
export interface LastResultDetails {
    dateCompleted: Date;
    duration: number;
    runBy: VSS_Common_Contracts.IdentityRef;
}
export interface ModuleCoverage {
    blockCount: number;
    blockData: number[];
    functions: FunctionCoverage[];
    name: string;
    signature: string;
    signatureAge: number;
    statistics: CoverageStatistics;
}
export interface NameValuePair {
    name: string;
    value: string;
}
export interface PlanUpdateModel {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    configurationIds: number[];
    description: string;
    endDate: string;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    startDate: string;
    state: string;
    status: string;
}
export interface PointAssignment {
    configuration: ShallowReference;
    tester: VSS_Common_Contracts.IdentityRef;
}
export interface PointUpdateModel {
    outcome: string;
    resetToActive: boolean;
    tester: VSS_Common_Contracts.IdentityRef;
}
export interface PointWorkItemProperty {
    workItem: {
        key: string;
        value: any;
    };
}
export interface PropertyBag {
    /**
     * Generic store for test session data
     */
    bag: {
        [key: string]: string;
    };
}
export interface QueryModel {
    query: string;
}
export interface ReleaseReference {
    definitionId: number;
    environmentDefinitionId: number;
    environmentDefinitionName: string;
    environmentId: number;
    environmentName: string;
    id: number;
    name: string;
}
export interface Response {
    error: string;
    id: string;
    status: string;
    url: string;
}
export enum ResultDetails {
    None = 0,
    Iterations = 1,
    WorkItems = 2,
}
export enum ResultObjectType {
    TestSuite = 0,
    TestPlan = 1,
}
export interface ResultRetentionSettings {
    automatedResultsRetentionDuration: number;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    manualResultsRetentionDuration: number;
}
export interface ResultsFilter {
    automatedTestName: string;
    branch: string;
    groupBy: string;
    maxCompleteDate: Date;
    resultsCount: number;
    testResultsContext: TestResultsContext;
    trendDays: number;
}
export interface ResultUpdateRequestModel {
    actionResultDeletes: TestActionResultModel[];
    actionResults: TestActionResultModel[];
    parameterDeletes: TestResultParameterModel[];
    parameters: TestResultParameterModel[];
    testCaseResult: TestCaseResultUpdateModel;
}
export interface ResultUpdateResponseModel {
    revision: number;
}
export interface RunCreateModel {
    automated: boolean;
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    comment: string;
    completeDate: string;
    configurationIds: number[];
    controller: string;
    customTestFields: CustomTestField[];
    dtlAutEnvironment: ShallowReference;
    dtlTestEnvironment: ShallowReference;
    dueDate: string;
    environmentDetails: DtlEnvironmentDetails;
    errorMessage: string;
    filter: RunFilter;
    iteration: string;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    plan: ShallowReference;
    pointIds: number[];
    releaseEnvironmentUri: string;
    releaseUri: string;
    runTimeout: any;
    sourceWorkflow: string;
    startDate: string;
    state: string;
    testConfigurationsMapping: string;
    testEnvironmentId: string;
    testSettings: ShallowReference;
    type: string;
}
/**
 * This class is used to provide the filters used for discovery
 */
export interface RunFilter {
    /**
     * filter for the test case sources (test containers)
     */
    sourceFilter: string;
    /**
     * filter for the test cases
     */
    testCaseFilter: string;
}
export interface RunStatistic {
    count: number;
    outcome: string;
    resolutionState: TestResolutionState;
    state: string;
}
export interface RunUpdateModel {
    build: ShallowReference;
    comment: string;
    completedDate: string;
    controller: string;
    deleteInProgressResults: boolean;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentDetails: DtlEnvironmentDetails;
    dueDate: string;
    errorMessage: string;
    iteration: string;
    logEntries: TestMessageLogDetails[];
    name: string;
    startedDate: string;
    state: string;
    substate: TestRunSubstate;
    testEnvironmentId: string;
    testSettings: ShallowReference;
}
/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface SharedStepModel {
    id: number;
    revision: number;
}
export interface SuiteCreateModel {
    name: string;
    queryString: string;
    requirementIds: number[];
    suiteType: string;
}
export interface SuiteEntry {
    /**
     * Id of child suite in a suite
     */
    childSuiteId: number;
    /**
     * Sequence number for the test case or child suite in the suite
     */
    sequenceNumber: number;
    /**
     * Id for the suite
     */
    suiteId: number;
    /**
     * Id of a test case in a suite
     */
    testCaseId: number;
}
export interface SuiteEntryUpdateModel {
    /**
     * Id of child suite in a suite
     */
    childSuiteId: number;
    /**
     * Updated sequence number for the test case or child suite in the suite
     */
    sequenceNumber: number;
    /**
     * Id of a test case in a suite
     */
    testCaseId: number;
}
export interface SuiteTestCase {
    pointAssignments: PointAssignment[];
    testCase: WorkItemReference;
}
export interface SuiteUpdateModel {
}
export interface TestActionResultModel extends TestResultModelBase {
    actionPath: string;
    iterationId: number;
    sharedStepModel: SharedStepModel;
    url: string;
}
export interface TestAttachment {
    attachmentType: AttachmentType;
    comment: string;
    createdDate: Date;
    fileName: string;
    id: number;
    url: string;
}
export interface TestAttachmentReference {
    id: number;
    url: string;
}
export interface TestAttachmentRequestModel {
    attachmentType: string;
    comment: string;
    fileName: string;
    stream: string;
}
export interface TestCaseResult {
    afnStripId: number;
    area: ShallowReference;
    associatedBugs: ShallowReference[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    build: ShallowReference;
    buildReference: BuildReference;
    comment: string;
    completedDate: Date;
    computerName: string;
    configuration: ShallowReference;
    createdDate: Date;
    customFields: CustomTestField[];
    durationInMs: number;
    errorMessage: string;
    failingSince: FailingSince;
    failureType: string;
    id: number;
    iterationDetails: TestIterationDetailsModel[];
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    priority: number;
    project: ShallowReference;
    release: ShallowReference;
    releaseReference: ReleaseReference;
    resetCount: number;
    resolutionState: string;
    resolutionStateId: number;
    revision: number;
    runBy: VSS_Common_Contracts.IdentityRef;
    stackTrace: string;
    startedDate: Date;
    state: string;
    testCase: ShallowReference;
    testCaseTitle: string;
    testPlan: ShallowReference;
    testPoint: ShallowReference;
    testRun: ShallowReference;
    testSuite: ShallowReference;
    url: string;
}
export interface TestCaseResultAttachmentModel {
    id: number;
    iterationId: number;
    name: string;
    size: number;
    url: string;
}
export interface TestCaseResultIdentifier {
    testResultId: number;
    testRunId: number;
}
export interface TestCaseResultUpdateModel {
    associatedWorkItems: number[];
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    customFields: CustomTestField[];
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    resolutionState: string;
    runBy: VSS_Common_Contracts.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCasePriority: string;
    testResult: ShallowReference;
}
export interface TestConfiguration {
    /**
     * Area of the configuration
     */
    area: ShallowReference;
    /**
     * Description of the configuration
     */
    description: string;
    /**
     * Id of the configuration
     */
    id: number;
    /**
     * Is the configuration a default for the test plans
     */
    isDefault: boolean;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Last Updated Data
     */
    lastUpdatedDate: Date;
    /**
     * Name of the configuration
     */
    name: string;
    /**
     * Project to which the configuration belongs
     */
    project: ShallowReference;
    /**
     * Revision of the the configuration
     */
    revision: number;
    /**
     * State of the configuration
     */
    state: TestConfigurationState;
    /**
     * Url of Configuration Resource
     */
    url: string;
    /**
     * Dictionary of Test Variable, Selected Value
     */
    values: NameValuePair[];
}
export enum TestConfigurationState {
    /**
     * The configuration can be used for new test runs.
     */
    Active = 1,
    /**
     * The configuration has been retired and should not be used for new test runs.
     */
    Inactive = 2,
}
export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
}
export interface TestFailureDetails {
    count: number;
    testResults: ShallowReference[];
}
export interface TestFailuresAnalysis {
    existingFailures: TestFailureDetails;
    fixedTests: TestFailureDetails;
    newFailures: TestFailureDetails;
    previousContext: TestResultsContext;
}
export interface TestIterationDetailsModel {
    actionResults: TestActionResultModel[];
    attachments: TestCaseResultAttachmentModel[];
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    id: number;
    outcome: string;
    parameters: TestResultParameterModel[];
    startedDate: Date;
    url: string;
}
/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface TestMessageLogDetails {
    /**
     * Date when the resource is created
     */
    dateCreated: Date;
    /**
     * Id of the resource
     */
    entryId: number;
    /**
     * Message of the resource
     */
    message: string;
}
export interface TestMethod {
    container: string;
    name: string;
}
export enum TestOutcome {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * Test has not been completed, or the test type does not report pass/failure.
     */
    None = 1,
    /**
     * Test was executed w/o any issues.
     */
    Passed = 2,
    /**
     * Test was executed, but there were issues. Issues may involve exceptions or failed assertions.
     */
    Failed = 3,
    /**
     * Test has completed, but we can't say if it passed or failed. May be used for aborted tests...
     */
    Inconclusive = 4,
    /**
     * The test timed out
     */
    Timeout = 5,
    /**
     * Test was aborted. This was not caused by a user gesture, but rather by a framework decision.
     */
    Aborted = 6,
    /**
     * Test had it chance for been executed but was not, as ITestElement.IsRunnable == false.
     */
    Blocked = 7,
    /**
     * Test was not executed. This was caused by a user gesture - e.g. user hit stop button.
     */
    NotExecuted = 8,
    /**
     * To be used by Run level results. This is not a failure.
     */
    Warning = 9,
    /**
     * There was a system error while we were trying to execute a test.
     */
    Error = 10,
    /**
     * Test is Not Applicable for execution.
     */
    NotApplicable = 11,
    /**
     * Test is paused.
     */
    Paused = 12,
    /**
     * Test is currently executing. Added this for TCM charts
     */
    InProgress = 13,
    /**
     * Test is not impacted. Added fot TIA.
     */
    NotImpacted = 14,
    MaxValue = 14,
}
export interface TestPlan {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    clientUrl: string;
    description: string;
    endDate: Date;
    id: number;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    previousBuild: ShallowReference;
    project: ShallowReference;
    revision: number;
    rootSuite: ShallowReference;
    startDate: Date;
    state: string;
    updatedBy: VSS_Common_Contracts.IdentityRef;
    updatedDate: Date;
    url: string;
}
export interface TestPlanCloneRequest {
    destinationTestPlan: TestPlan;
    options: CloneOptions;
    suiteIds: number[];
}
export interface TestPlanHubData {
    selectedSuiteId: number;
    testPlan: TestPlan;
    testPoints: TestPoint[];
    testSuites: TestSuite[];
}
export interface TestPlansWithSelection {
    lastSelectedPlan: number;
    lastSelectedSuite: number;
    plans: TestPlan[];
}
export interface TestPoint {
    assignedTo: VSS_Common_Contracts.IdentityRef;
    automated: boolean;
    comment: string;
    configuration: ShallowReference;
    failureType: string;
    id: number;
    lastResolutionStateId: number;
    lastResult: ShallowReference;
    lastResultDetails: LastResultDetails;
    lastResultState: string;
    lastRunBuildNumber: string;
    lastTestRun: ShallowReference;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    revision: number;
    state: string;
    suite: ShallowReference;
    testCase: WorkItemReference;
    testPlan: ShallowReference;
    url: string;
    workItemProperties: any[];
}
export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}
export interface TestResultCreateModel {
    area: ShallowReference;
    associatedWorkItems: number[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    configuration: ShallowReference;
    customFields: CustomTestField[];
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    resolutionState: string;
    runBy: VSS_Common_Contracts.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCase: ShallowReference;
    testCasePriority: string;
    testCaseTitle: string;
    testPoint: ShallowReference;
}
export interface TestResultHistory {
    groupByField: string;
    resultsForGroup: TestResultHistoryDetailsForGroup[];
}
export interface TestResultHistoryDetailsForGroup {
    groupByValue: any;
    latestResult: TestCaseResult;
}
export interface TestResultModelBase {
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    outcome: string;
    startedDate: Date;
}
export interface TestResultParameterModel {
    actionPath: string;
    iterationId: number;
    parameterName: string;
    url: string;
    value: string;
}
export interface TestResultsContext {
    build: BuildReference;
    contextType: TestResultsContextType;
    release: ReleaseReference;
}
export enum TestResultsContextType {
    Build = 1,
    Release = 2,
}
export interface TestResultsDetails {
    groupByField: string;
    resultsForGroup: TestResultsDetailsForGroup[];
}
export interface TestResultsDetailsForGroup {
    groupByValue: any;
    results: TestCaseResult[];
    resultsCountByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
}
export interface TestResultsQuery {
    fields: string[];
    results: TestCaseResult[];
    resultsFilter: ResultsFilter;
}
export interface TestResultSummary {
    aggregatedResultsAnalysis: AggregatedResultsAnalysis;
    teamProject: TFS_Core_Contracts.TeamProjectReference;
    testFailures: TestFailuresAnalysis;
    testResultsContext: TestResultsContext;
}
export interface TestResultTrendFilter {
    branchNames: string[];
    buildCount: number;
    definitionIds: number[];
    maxCompleteDate: Date;
    publishContext: string;
    testRunTitles: string[];
    trendDays: number;
}
export interface TestRun {
    build: ShallowReference;
    buildConfiguration: BuildConfiguration;
    comment: string;
    completedDate: Date;
    controller: string;
    createdDate: Date;
    customFields: CustomTestField[];
    dropLocation: string;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentCreationDetails: DtlEnvironmentDetails;
    dueDate: Date;
    errorMessage: string;
    filter: RunFilter;
    id: number;
    incompleteTests: number;
    isAutomated: boolean;
    iteration: string;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    notApplicableTests: number;
    owner: VSS_Common_Contracts.IdentityRef;
    passedTests: number;
    phase: string;
    plan: ShallowReference;
    postProcessState: string;
    project: ShallowReference;
    release: ReleaseReference;
    releaseEnvironmentUri: string;
    releaseUri: string;
    revision: number;
    runStatistics: RunStatistic[];
    startedDate: Date;
    state: string;
    substate: TestRunSubstate;
    testEnvironment: TestEnvironment;
    testMessageLogId: number;
    testSettings: ShallowReference;
    totalTests: number;
    unanalyzedTests: number;
    url: string;
    webAccessUrl: string;
}
export interface TestRunCoverage {
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
    testRun: ShallowReference;
}
export interface TestRunStatistic {
    run: ShallowReference;
    runStatistics: RunStatistic[];
}
export enum TestRunSubstate {
    None = 0,
    CreatingEnvironment = 1,
    RunningTests = 2,
    CanceledByUser = 3,
    AbortedBySystem = 4,
    TimedOut = 5,
    PendingAnalysis = 6,
    Analyzed = 7,
    CancellationInProgress = 8,
}
export interface TestSession {
    /**
     * Area path of the test session
     */
    area: ShallowReference;
    /**
     * Comments in the test session
     */
    comment: string;
    /**
     * Duration of the session
     */
    endDate: Date;
    /**
     * Id of the test session
     */
    id: number;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate: Date;
    /**
     * Owner of the test session
     */
    owner: VSS_Common_Contracts.IdentityRef;
    /**
     * Project to which the test session belongs
     */
    project: ShallowReference;
    /**
     * Generic store for test session data
     */
    propertyBag: PropertyBag;
    /**
     * Revision of the test session
     */
    revision: number;
    /**
     * Source of the test session
     */
    source: TestSessionSource;
    /**
     * Start date
     */
    startDate: Date;
    /**
     * State of the test session
     */
    state: TestSessionState;
    /**
     * Title of the test session
     */
    title: string;
    /**
     * Url of Test Session Resource
     */
    url: string;
}
export interface TestSessionExploredWorkItemReference extends TestSessionWorkItemReference {
    /**
     * Workitem references of workitems filed as a part of the current workitem exploration.
     */
    associatedWorkItems: TestSessionWorkItemReference[];
    /**
     * Time when exploration of workitem ended.
     */
    endTime: Date;
    /**
     * Time when explore of workitem was started.
     */
    startTime: Date;
}
export enum TestSessionSource {
    /**
     * Source of test session uncertain as it is stale
     */
    Unknown = 0,
    /**
     * The session was created from Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop = 1,
    /**
     * The session was created from feedback client.
     */
    FeedbackDesktop = 2,
    /**
     * The session was created from browser extension.
     */
    XTWeb = 3,
    /**
     * The session was created from browser extension.
     */
    FeedbackWeb = 4,
    /**
     * The session was created from web access using Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop2 = 5,
    /**
     * To show sessions from all supported sources.
     */
    SessionInsightsForAll = 6,
}
export enum TestSessionState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The session is still being created.
     */
    NotStarted = 1,
    /**
     * The session is running.
     */
    InProgress = 2,
    /**
     * The session has paused.
     */
    Paused = 3,
    /**
     * The session has completed.
     */
    Completed = 4,
    /**
     * This is required for Feedback session which are declined
     */
    Declined = 5,
}
export interface TestSessionWorkItemReference {
    /**
     * Id of the workitem
     */
    id: number;
    /**
     * Type of the workitem
     */
    type: string;
}
/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export interface TestSettings {
    /**
     * Area path required to create test settings
     */
    areaPath: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic: boolean;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles: string;
    /**
     * Test settings content.
     */
    testSettingsContent: string;
    /**
     * Test settings id.
     */
    testSettingsId: number;
    /**
     * Test settings name.
     */
    testSettingsName: string;
}
export interface TestSuite {
    areaUri: string;
    children: TestSuite[];
    defaultConfigurations: ShallowReference[];
    id: number;
    inheritDefaultConfigurations: boolean;
    lastError: string;
    lastPopulatedDate: Date;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    parent: ShallowReference;
    plan: ShallowReference;
    project: ShallowReference;
    queryString: string;
    requirementId: number;
    revision: number;
    state: string;
    suites: ShallowReference[];
    suiteType: string;
    testCaseCount: number;
    testCasesUrl: string;
    text: string;
    url: string;
}
export interface TestSuiteCloneRequest {
    cloneOptions: CloneOptions;
    destinationSuiteId: number;
    destinationSuiteProjectName: string;
}
export interface TestSummaryForWorkItem {
    summary: AggregatedDataForResultTrend;
    workItem: WorkItemReference;
}
export interface TestToWorkItemLinks {
    test: TestMethod;
    workItems: WorkItemReference[];
}
export interface TestVariable {
    /**
     * Description of the test variable
     */
    description: string;
    /**
     * Id of the test variable
     */
    id: number;
    /**
     * Name of the test variable
     */
    name: string;
    /**
     * Project to which the test variable belongs
     */
    project: ShallowReference;
    /**
     * Revision
     */
    revision: number;
    /**
     * Url of the test variable
     */
    url: string;
    /**
     * List of allowed values
     */
    values: string[];
}
export interface WorkItemReference {
    id: string;
    name: string;
    type: string;
    url: string;
    webUrl: string;
}
export interface WorkItemToTestLinks {
    tests: TestMethod[];
    workItem: WorkItemReference;
}
export var TypeInfo: {
    AggregatedDataForResultTrend: any;
    AggregatedResultsAnalysis: any;
    AggregatedResultsByOutcome: any;
    AttachmentType: {
        enumValues: {
            "generalAttachment": number;
            "afnStrip": number;
            "bugFilingData": number;
            "codeCoverage": number;
            "intermediateCollectorData": number;
            "runConfig": number;
            "testImpactDetails": number;
            "tmiTestRunDeploymentFiles": number;
            "tmiTestRunReverseDeploymentFiles": number;
            "tmiTestResultDetail": number;
            "tmiTestRunSummary": number;
            "consoleLog": number;
        };
    };
    BatchResponse: any;
    CloneOperationInformation: any;
    CloneOperationState: {
        enumValues: {
            "failed": number;
            "inProgress": number;
            "queued": number;
            "succeeded": number;
        };
    };
    CoverageQueryFlags: {
        enumValues: {
            "modules": number;
            "functions": number;
            "blockData": number;
        };
    };
    CustomTestFieldDefinition: any;
    CustomTestFieldScope: {
        enumValues: {
            "none": number;
            "testRun": number;
            "testResult": number;
            "system": number;
            "all": number;
        };
    };
    CustomTestFieldType: {
        enumValues: {
            "bit": number;
            "dateTime": number;
            "int": number;
            "float": number;
            "string": number;
            "guid": number;
        };
    };
    FailingSince: any;
    LastResultDetails: any;
    Response: any;
    ResultDetails: {
        enumValues: {
            "none": number;
            "iterations": number;
            "workItems": number;
        };
    };
    ResultObjectType: {
        enumValues: {
            "testSuite": number;
            "testPlan": number;
        };
    };
    ResultRetentionSettings: any;
    ResultsFilter: any;
    ResultUpdateRequestModel: any;
    RunUpdateModel: any;
    TestActionResultModel: any;
    TestAttachment: any;
    TestCaseResult: any;
    TestConfiguration: any;
    TestConfigurationState: {
        enumValues: {
            "active": number;
            "inactive": number;
        };
    };
    TestFailuresAnalysis: any;
    TestIterationDetailsModel: any;
    TestMessageLogDetails: any;
    TestOutcome: {
        enumValues: {
            "unspecified": number;
            "none": number;
            "passed": number;
            "failed": number;
            "inconclusive": number;
            "timeout": number;
            "aborted": number;
            "blocked": number;
            "notExecuted": number;
            "warning": number;
            "error": number;
            "notApplicable": number;
            "paused": number;
            "inProgress": number;
            "notImpacted": number;
            "maxValue": number;
        };
    };
    TestPlan: any;
    TestPlanCloneRequest: any;
    TestPlanHubData: any;
    TestPlansWithSelection: any;
    TestPoint: any;
    TestResultHistory: any;
    TestResultHistoryDetailsForGroup: any;
    TestResultModelBase: any;
    TestResultsContext: any;
    TestResultsContextType: {
        enumValues: {
            "build": number;
            "release": number;
        };
    };
    TestResultsDetails: any;
    TestResultsDetailsForGroup: any;
    TestResultsQuery: any;
    TestResultSummary: any;
    TestResultTrendFilter: any;
    TestRun: any;
    TestRunSubstate: {
        enumValues: {
            "none": number;
            "creatingEnvironment": number;
            "runningTests": number;
            "canceledByUser": number;
            "abortedBySystem": number;
            "timedOut": number;
            "pendingAnalysis": number;
            "analyzed": number;
            "cancellationInProgress": number;
        };
    };
    TestSession: any;
    TestSessionExploredWorkItemReference: any;
    TestSessionSource: {
        enumValues: {
            "unknown": number;
            "xTDesktop": number;
            "feedbackDesktop": number;
            "xTWeb": number;
            "feedbackWeb": number;
            "xTDesktop2": number;
            "sessionInsightsForAll": number;
        };
    };
    TestSessionState: {
        enumValues: {
            "unspecified": number;
            "notStarted": number;
            "inProgress": number;
            "paused": number;
            "completed": number;
            "declined": number;
        };
    };
    TestSuite: any;
    TestSummaryForWorkItem: any;
};
}
declare module "TFS/TestManagement/Helper/Utils" {
/// <reference types="jquery" />
/// <reference types="jqueryui" />
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
/**
 * Interface for test action which could be teststep or sharedstep
 */
export interface ITestAction extends IXmlStorage {
    id: number;
    owner: ITestActionOwner;
}
/**
 * Interface for test step
 */
export interface ITestStep extends ITestAction {
    /**
    * description for teststep
    */
    description: string;
    /**
    * steptype use class TestStepType which is having static members "ActionStep" or "ValidateStep"
    */
    stepType: string;
    /**
    * set title/action for test step
    */
    setTitle(title: string): void;
    /**
    * get test step title/action
    */
    getTitle(): string;
    /**
    * set expectedresult for test step
    */
    setExpectedResult(expectedResult: string): void;
    /**
    * get expectedresult for test step
    */
    getExpectedResult(): string;
    /**
    * create atatchment for test step
    * @param {string} url -- url of attachemnt
    * @param {string} name -- name for attachment
    */
    createAttachment(url: string, name?: string): ITestStepAttachment;
    /**
    * array of attachments for test step
    */
    attachments: Array<ITestStepAttachment>;
}
/**
 * Interface for test base
 */
export interface ITestBase {
    /**
    * create a test step
    */
    createTestStep(): ITestStep;
    /**
    * array of actions: which could be teststep or sharedstep
    */
    actions: Array<ITestAction>;
    /**
    * function to generate teststep xml for all actions
    */
    generateXmlFromActions(): string;
    /**
    * it will initalize actions array for given input
    * @param {string} test -- step xml string
    * @parma {ITestAttachmentLink[]} links -- generate this objects from all relations fetched in workitem object
    */
    loadActions(xmString: string, links: ITestAttachmentLink[]): void;
    /**
    * it will update json with new operations
    * 1st for teststep xml
    * remaining for add relation links based on all teststep attachments
    */
    saveActions(json: VSS_Common_Contracts.JsonPatchDocument): VSS_Common_Contracts.JsonPatchDocument;
}
/**
 * Interface for base helper class
 */
export interface ITestBaseHelper {
    /**
    * create an object of testbase, on which you can do following things
    * create test step
    * generate xml based on all test steps
    * update json patch document corresponsing to all actions and all teststep attachment
    * load actions array by passing requirement parameters
    */
    create(): ITestBase;
}
/**
 * Interface for TestActionOwner
 */
export interface ITestActionOwner extends ITestBase {
    /**
     * will generate next available Id for new action
     */
    getNextAvailableActionId(): number;
}
/**
 * Interface for XmlStorage
 */
export interface IXmlStorage {
    fromXml($stepsXmlDom: JQuery): void;
    toXml($stepsXmlDom: JQuery): void;
}
/**
 * Interface for test attachment
 */
export interface ITestAttachment {
    /**
    * comment on attachemnt
    */
    comment: string;
    /**
    * name of attachemnt
    */
    name: string;
    /**
    * url of attachment
    */
    url: string;
}
/**
 * Interface for test step attachment
 */
export interface ITestStepAttachment extends ITestAttachment {
}
/**
 * Interface for test attachment link, create this using workitem's relation object
 */
export interface ITestAttachmentLink {
    /**
    * relation
    */
    rel: string;
    /**
    * title
    */
    title: string;
    /**
    * url
    */
    url: string;
    /**
    * attribute eg: "comment" : [TestStep=1]
    */
    attributes: IDictionaryStringTo<any>;
}
/**
 * Supported test step type
 */
export class TestStepType {
    static Action: string;
    static Validate: string;
}
/**
 * Supported action type
 */
export class TestActionTypes {
    static Step: string;
    static SharedSteps: string;
}
/**
 * Test base helper class
 */
export class TestBaseHelper {
    /**
    * It will create a testbase object, which we could link as test case
    * using this object we can create teststeps and generate teststep xml
    * in end we can save alla actions into jsonpatchdocument object
    * finally we can maek a create/update worktiem call using that json
    */
    create(): ITestBase;
}
}
declare module "TFS/TestManagement/RestClient" {
import Contracts = require("TFS/TestManagement/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected actionResultsApiVersion: string;
    protected attachmentsApiVersion: string;
    protected attachmentsApiVersion_2bffebe9: string;
    protected bugsApiVersion: string;
    protected cloneOperationApiVersion: string;
    protected cloneOperationApiVersion_5b9d6320: string;
    protected cloneOperationApiVersion_edc3ef4b: string;
    protected codeCoverageApiVersion: string;
    protected codeCoverageApiVersion_5a37d0e4: string;
    protected codeCoverageApiVersion_77560e8a: string;
    protected configurationsApiVersion: string;
    protected extensionFieldsApiVersion: string;
    protected iterationsApiVersion: string;
    protected messageLogsApiVersion: string;
    protected parameterResultsApiVersion: string;
    protected plansApiVersion: string;
    protected pointsApiVersion: string;
    protected resultRetentionSettingsApiVersion: string;
    protected resultsApiVersion: string;
    protected runsApiVersion: string;
    protected runsApiVersion_0a42c424: string;
    protected sessionApiVersion: string;
    protected sharedParameterApiVersion: string;
    protected sharedStepApiVersion: string;
    protected suiteEntryApiVersion: string;
    protected suitesApiVersion: string;
    protected suitesApiVersion_7b7619a0: string;
    protected suitesApiVersion_a4a1ec1c: string;
    protected testCaseApiVersion: string;
    protected testSettingsApiVersion: string;
    protected variablesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestVariable} testVariable
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId
     * @return IPromise<Contracts.TestVariable>
     */
    updateTestVariable(testVariable: Contracts.TestVariable, project: string, testVariableId: number): IPromise<Contracts.TestVariable>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestVariable[]>
     */
    getTestVariables(project: string, skip?: number, top?: number): IPromise<Contracts.TestVariable[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId
     * @return IPromise<Contracts.TestVariable>
     */
    getTestVariableById(project: string, testVariableId: number): IPromise<Contracts.TestVariable>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId
     * @return IPromise<void>
     */
    deleteTestVariable(project: string, testVariableId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestVariable} testVariable
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestVariable>
     */
    createTestVariable(testVariable: Contracts.TestVariable, project: string): IPromise<Contracts.TestVariable>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @return IPromise<Contracts.TestSettings>
     */
    getTestSettingsById(project: string, testSettingsId: number): IPromise<Contracts.TestSettings>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @return IPromise<void>
     */
    deleteTestSettings(project: string, testSettingsId: number): IPromise<void>;
    /**
     * @param {Contracts.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<number>
     */
    createTestSettings(testSettings: Contracts.TestSettings, project: string): IPromise<number>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testCaseId
     * @return IPromise<void>
     */
    deleteTestCase(project: string, testCaseId: number): IPromise<void>;
    /**
     * @param {number} testCaseId
     * @return IPromise<Contracts.TestSuite[]>
     */
    getSuitesByTestCaseId(testCaseId: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {Contracts.SuiteUpdateModel} suiteUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.TestSuite>
     */
    updateTestSuite(suiteUpdateModel: Contracts.SuiteUpdateModel, project: string, planId: number, suiteId: number): IPromise<Contracts.TestSuite>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {boolean} includeSuites
     * @param {number} skip
     * @param {number} top
     * @param {boolean} asTreeView
     * @return IPromise<Contracts.TestSuite[]>
     */
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number, asTreeView?: boolean): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {boolean} includeChildSuites
     * @return IPromise<Contracts.TestSuite>
     */
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): IPromise<Contracts.TestSuite>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<void>
     */
    deleteTestSuite(project: string, planId: number, suiteId: number): IPromise<void>;
    /**
     * @param {Contracts.SuiteCreateModel} testSuite
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.TestSuite[]>
     */
    createTestSuite(testSuite: Contracts.SuiteCreateModel, project: string, planId: number, suiteId: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @return IPromise<void>
     */
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteTestCase[]>
     */
    getTestCases(project: string, planId: number, suiteId: number): IPromise<Contracts.SuiteTestCase[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} testCaseIds
     * @return IPromise<Contracts.SuiteTestCase>
     */
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): IPromise<Contracts.SuiteTestCase>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @return IPromise<Contracts.SuiteTestCase[]>
     */
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): IPromise<Contracts.SuiteTestCase[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.SuiteEntryUpdateModel[]} suiteEntries
     * @param {string} project - Project ID or project name
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteEntry[]>
     */
    reorderSuiteEntries(suiteEntries: Contracts.SuiteEntryUpdateModel[], project: string, suiteId: number): IPromise<Contracts.SuiteEntry[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteEntry[]>
     */
    getSuiteEntries(project: string, suiteId: number): IPromise<Contracts.SuiteEntry[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} sharedStepId
     * @return IPromise<void>
     */
    deleteSharedStep(project: string, sharedStepId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} sharedParameterId
     * @return IPromise<void>
     */
    deleteSharedParameter(project: string, sharedParameterId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestSession} testSession
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TestSession>
     */
    updateTestSession(testSession: Contracts.TestSession, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TestSession>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {number} period
     * @param {boolean} allSessions
     * @param {boolean} includeAllProperties
     * @param {Contracts.TestSessionSource} source
     * @param {boolean} includeOnlyCompletedSessions
     * @return IPromise<Contracts.TestSession[]>
     */
    getTestSessions(teamContext: TFS_Core_Contracts.TeamContext, period?: number, allSessions?: boolean, includeAllProperties?: boolean, source?: Contracts.TestSessionSource, includeOnlyCompletedSessions?: boolean): IPromise<Contracts.TestSession[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestSession} testSession
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TestSession>
     */
    createTestSession(testSession: Contracts.TestSession, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TestSession>;
    /**
     * @param {Contracts.RunUpdateModel} runUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRun>
     */
    updateTestRun(runUpdateModel: Contracts.RunUpdateModel, project: string, runId: number): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} buildUri
     * @param {string} owner
     * @param {string} tmiRunId
     * @param {number} planId
     * @param {boolean} includeRunDetails
     * @param {boolean} automated
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRun>
     */
    getTestRunById(project: string, runId: number): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<void>
     */
    deleteTestRun(project: string, runId: number): IPromise<void>;
    /**
     * @param {Contracts.RunCreateModel} testRun
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestRun>
     */
    createTestRun(testRun: Contracts.RunCreateModel, project: string): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRunStatistic>
     */
    getTestRunStatistics(project: string, runId: number): IPromise<Contracts.TestRunStatistic>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestResultById(project: string, runId: number, testCaseResultId: number, detailsToInclude?: Contracts.ResultDetails): IPromise<Contracts.TestCaseResult>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ResultRetentionSettings} retentionSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ResultRetentionSettings>
     */
    updateResultRetentionSettings(retentionSettings: Contracts.ResultRetentionSettings, project: string): IPromise<Contracts.ResultRetentionSettings>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ResultRetentionSettings>
     */
    getResultRetentionSettings(project: string): IPromise<Contracts.ResultRetentionSettings>;
    /**
     * @param {Contracts.PointUpdateModel} pointUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} pointIds
     * @return IPromise<Contracts.TestPoint[]>
     */
    updateTestPoints(pointUpdateModel: Contracts.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): IPromise<Contracts.TestPoint[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} witFields
     * @param {string} configurationId
     * @param {string} testCaseId
     * @param {string} testPointIds
     * @param {boolean} includePointDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestPoint[]>
     */
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestPoint[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} pointIds
     * @param {string} witFields
     * @return IPromise<Contracts.TestPoint>
     */
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): IPromise<Contracts.TestPoint>;
    /**
     * @param {Contracts.PlanUpdateModel} planUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.TestPlan>
     */
    updateTestPlan(planUpdateModel: Contracts.PlanUpdateModel, project: string, planId: number): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} owner
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includePlanDetails
     * @param {boolean} filterActivePlans
     * @return IPromise<Contracts.TestPlan[]>
     */
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): IPromise<Contracts.TestPlan[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.TestPlan>
     */
    getPlanById(project: string, planId: number): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<void>
     */
    deleteTestPlan(project: string, planId: number): IPromise<void>;
    /**
     * @param {Contracts.PlanUpdateModel} testPlan
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestPlan>
     */
    createTestPlan(testPlan: Contracts.PlanUpdateModel, project: string): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} paramName
     * @return IPromise<Contracts.TestResultParameterModel[]>
     */
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): IPromise<Contracts.TestResultParameterModel[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestMessageLogDetails[]>
     */
    getTestRunLogs(project: string, runId: number): IPromise<Contracts.TestMessageLogDetails[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeActionResults
     * @return IPromise<Contracts.TestIterationDetailsModel[]>
     */
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): IPromise<Contracts.TestIterationDetailsModel[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {boolean} includeActionResults
     * @return IPromise<Contracts.TestIterationDetailsModel>
     */
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): IPromise<Contracts.TestIterationDetailsModel>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.CustomTestFieldScope} scopeFilter
     * @return IPromise<Contracts.CustomTestFieldDefinition[]>
     */
    queryCustomFields(project: string, scopeFilter: Contracts.CustomTestFieldScope): IPromise<Contracts.CustomTestFieldDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.CustomTestFieldDefinition[]} newFields
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.CustomTestFieldDefinition[]>
     */
    addCustomFields(newFields: Contracts.CustomTestFieldDefinition[], project: string): IPromise<Contracts.CustomTestFieldDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestConfiguration} testConfiguration
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId
     * @return IPromise<Contracts.TestConfiguration>
     */
    updateTestConfiguration(testConfiguration: Contracts.TestConfiguration, project: string, testConfigurationId: number): IPromise<Contracts.TestConfiguration>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {string} continuationToken
     * @param {boolean} includeAllProperties
     * @return IPromise<Contracts.TestConfiguration[]>
     */
    getTestConfigurations(project: string, skip?: number, top?: number, continuationToken?: string, includeAllProperties?: boolean): IPromise<Contracts.TestConfiguration[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId
     * @return IPromise<Contracts.TestConfiguration>
     */
    getTestConfigurationById(project: string, testConfigurationId: number): IPromise<Contracts.TestConfiguration>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId
     * @return IPromise<void>
     */
    deleteTestConfiguration(project: string, testConfigurationId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestConfiguration} testConfiguration
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestConfiguration>
     */
    createTestConfiguration(testConfiguration: Contracts.TestConfiguration, project: string): IPromise<Contracts.TestConfiguration>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} flags
     * @return IPromise<Contracts.TestRunCoverage[]>
     */
    getTestRunCodeCoverage(project: string, runId: number, flags: number): IPromise<Contracts.TestRunCoverage[]>;
    /**
     * @exemptedapi
     * [Preview API] http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     *
     * @param {Contracts.CodeCoverageData} coverageData
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<void>
     */
    updateCodeCoverageSummary(coverageData: Contracts.CodeCoverageData, project: string, buildId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} deltaBuildId
     * @return IPromise<Contracts.CodeCoverageSummary>
     */
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): IPromise<Contracts.CodeCoverageSummary>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} flags
     * @return IPromise<Contracts.BuildCoverage[]>
     */
    getBuildCodeCoverage(project: string, buildId: number, flags: number): IPromise<Contracts.BuildCoverage[]>;
    /**
     * @exemptedapi
     * [Preview API] http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/browse/containerId/filePath Request: HTML content of Code Coverage report
     *
     * @param {string} project - Project ID or project name
     * @param {number} containerId
     * @param {string} filePath
     * @return IPromise<void>
     */
    getCoverageView(project: string, containerId: number, filePath: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestSuiteCloneRequest} cloneRequestBody
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} sourceSuiteId
     * @return IPromise<Contracts.CloneOperationInformation>
     */
    cloneTestSuite(cloneRequestBody: Contracts.TestSuiteCloneRequest, project: string, planId: number, sourceSuiteId: number): IPromise<Contracts.CloneOperationInformation>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestPlanCloneRequest} cloneRequestBody
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.CloneOperationInformation>
     */
    cloneTestPlan(cloneRequestBody: Contracts.TestPlanCloneRequest, project: string, planId: number): IPromise<Contracts.CloneOperationInformation>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} cloneOperationId
     * @param {boolean} includeDetails
     * @return IPromise<Contracts.CloneOperationInformation>
     */
    getCloneInformation(project: string, cloneOperationId: number, includeDetails?: boolean): IPromise<Contracts.CloneOperationInformation>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.WorkItemReference[]>
     */
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): IPromise<Contracts.WorkItemReference[]>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test run attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test run attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestRunAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test result attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test result attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestActionResultModel[]>
     */
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestActionResultModel[]>;
}
export class CommonMethods3To3_1 extends CommonMethods2To3_1 {
    protected attachmentsApiVersion_2bffebe9: string;
    protected attachmentsApiVersion_4f004af4: string;
    protected historyApiVersion: string;
    protected resultDetailsByBuildApiVersion: string;
    protected resultDetailsByReleaseApiVersion: string;
    protected resultsApiVersion_4637d869: string;
    protected resultsApiVersion_6711da49: string;
    protected resultSummaryByBuildApiVersion: string;
    protected resultSummaryByReleaseApiVersion: string;
    protected resultSummaryByRequirementApiVersion: string;
    protected resultTrendByBuildApiVersion: string;
    protected resultTrendByReleaseApiVersion: string;
    protected workItemsApiVersion: string;
    protected workItemsApiVersion_371b1655: string;
    protected workItemsApiVersion_7b0bdee3: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} workItemCategory
     * @param {string} automatedTestName
     * @param {number} testCaseId
     * @param {Date} maxCompleteDate
     * @param {number} days
     * @param {number} workItemCount
     * @return IPromise<Contracts.WorkItemReference[]>
     */
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): IPromise<Contracts.WorkItemReference[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} testName
     * @return IPromise<Contracts.TestToWorkItemLinks>
     */
    queryTestMethodLinkedWorkItems(project: string, testName: string): IPromise<Contracts.TestToWorkItemLinks>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} testName
     * @param {number} workItemId
     * @return IPromise<boolean>
     */
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): IPromise<boolean>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.WorkItemToTestLinks} workItemToTestLinks
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemToTestLinks>
     */
    addWorkItemToTestLinks(workItemToTestLinks: Contracts.WorkItemToTestLinks, project: string): IPromise<Contracts.WorkItemToTestLinks>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AggregatedDataForResultTrend[]>
     */
    queryResultTrendForRelease(filter: Contracts.TestResultTrendFilter, project: string): IPromise<Contracts.AggregatedDataForResultTrend[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AggregatedDataForResultTrend[]>
     */
    queryResultTrendForBuild(filter: Contracts.TestResultTrendFilter, project: string): IPromise<Contracts.AggregatedDataForResultTrend[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultsContext} resultsContext
     * @param {string} project - Project ID or project name
     * @param {number[]} workItemIds
     * @return IPromise<Contracts.TestSummaryForWorkItem[]>
     */
    queryTestSummaryByRequirement(resultsContext: Contracts.TestResultsContext, project: string, workItemIds?: number[]): IPromise<Contracts.TestSummaryForWorkItem[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ReleaseReference[]} releases
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultSummary[]>
     */
    queryTestResultsSummaryForReleases(releases: Contracts.ReleaseReference[], project: string): IPromise<Contracts.TestResultSummary[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {Contracts.ReleaseReference} releaseToCompare
     * @return IPromise<Contracts.TestResultSummary>
     */
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: Contracts.ReleaseReference): IPromise<Contracts.TestResultSummary>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {Contracts.BuildReference} buildToCompare
     * @return IPromise<Contracts.TestResultSummary>
     */
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: Contracts.BuildReference): IPromise<Contracts.TestResultSummary>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultsQuery} query
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultsQuery>
     */
    getTestResultsByQuery(query: Contracts.TestResultsQuery, project: string): IPromise<Contracts.TestResultsQuery>;
    /**
     * @param {Contracts.TestCaseResult[]} results
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(results: Contracts.TestCaseResult[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResult[]} results
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(results: Contracts.TestCaseResult[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @return IPromise<Contracts.TestResultsDetails>
     */
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): IPromise<Contracts.TestResultsDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @return IPromise<Contracts.TestResultsDetails>
     */
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): IPromise<Contracts.TestResultsDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ResultsFilter} filter
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultHistory>
     */
    queryTestResultHistory(filter: Contracts.ResultsFilter, project: string): IPromise<Contracts.TestResultHistory>;
    /**
     * @exemptedapi
     * [Preview API] Returns attachment references for test run.
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestAttachment[]>
     */
    getTestRunAttachments(project: string, runId: number): IPromise<Contracts.TestAttachment[]>;
    /**
     * @exemptedapi
     * [Preview API] Returns attachment references for test result.
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.TestAttachment[]>
     */
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): IPromise<Contracts.TestAttachment[]>;
}
/**
 * @exemptedapi
 */
export class TestHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class TestHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient extends TestHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TestHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TestHttpClient3;
}
declare module "TFS/VersionControl/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AssociatedWorkItem {
    assignedTo: string;
    id: number;
    state: string;
    title: string;
    /**
     * REST url
     */
    url: string;
    webUrl: string;
    workItemType: string;
}
export interface AsyncGitOperationNotification {
    operationId: number;
}
export interface AsyncRefOperationCommitLevelEventNotification extends AsyncGitOperationNotification {
    commitId: string;
}
export interface AsyncRefOperationCompletedNotification extends AsyncGitOperationNotification {
    newRefName: string;
}
export interface AsyncRefOperationConflictNotification extends AsyncRefOperationCommitLevelEventNotification {
}
export interface AsyncRefOperationGeneralFailureNotification extends AsyncGitOperationNotification {
}
export interface AsyncRefOperationProgressNotification extends AsyncRefOperationCommitLevelEventNotification {
    progress: number;
}
/**
 * Meta data for a file attached to an artifact
 */
export interface Attachment {
    _links: any;
    /**
     * The person that uploaded this attachment
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the server by using SHA1 hash function.
     */
    contentHash: string;
    /**
     * The time the attachment was uploaded
     */
    createdDate: Date;
    /**
     * The description of the attachment, can be null.
     */
    description: string;
    /**
     * The display name of the attachment, can't be null or empty.
     */
    displayName: string;
    /**
     * Id of the code review attachment
     */
    id: number;
    properties: any;
    /**
     * The url to download the content of the attachment
     */
    url: string;
}
export interface Change<T> {
    changeType: VersionControlChangeType;
    item: T;
    newContent: ItemContent;
    sourceServerItem: string;
    url: string;
}
export interface ChangeCountDictionary {
}
export interface ChangeList<T> {
    allChangesIncluded: boolean;
    changeCounts: {
        [key: number]: number;
    };
    changes: Change<T>[];
    comment: string;
    commentTruncated: boolean;
    creationDate: Date;
    notes: CheckinNote[];
    owner: string;
    ownerDisplayName: string;
    ownerId: string;
    sortDate: Date;
    version: string;
}
/**
 * Criteria used in a search for change lists
 */
export interface ChangeListSearchCriteria {
    /**
     * If provided, a version descriptor to compare against base
     */
    compareVersion: string;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes: boolean;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames: boolean;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate: string;
    /**
     * If provided, a version descriptor for the earliest change list to include
     */
    fromVersion: string;
    /**
     * Path of item to search under. If the itemPaths memebr is used then it will take precedence over this.
     */
    itemPath: string;
    /**
     * List of item paths to search under. If this member is used then itemPath will be ignored.
     */
    itemPaths: string[];
    /**
     * Version of the items to search
     */
    itemVersion: string;
    /**
     * Number of results to skip (used when clicking more...)
     */
    skip: number;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate: string;
    /**
     * If provided, the maximum number of history entries to return
     */
    top: number;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toVersion: string;
    /**
     * Alias or display name of user who made the changes
     */
    user: string;
}
export interface CheckinNote {
    name: string;
    value: string;
}
export interface Comment {
    _links: any;
    /**
     * The author of the pull request comment.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * Determines what kind of comment when it was created.
     */
    commentType: CommentType;
    /**
     * The comment's content.
     */
    content: string;
    /**
     * The pull request comment id. It always starts from 1.
     */
    id: number;
    /**
     * Marks if this comment was soft-deleted.
     */
    isDeleted: boolean;
    /**
     * The date a comment was last updated.
     */
    lastUpdatedDate: Date;
    /**
     * The pull request comment id of the parent comment. This is used for replies
     */
    parentCommentId: number;
    /**
     * The date a comment was first published.
     */
    publishedDate: Date;
    /**
     * A list of the users who've liked this comment.
     */
    usersLiked: VSS_Common_Contracts.IdentityRef[];
}
/**
 * Iteration context is used to specify comparing iteration Ids when a comment thread is added while comparing 2 iterations.
 */
export interface CommentIterationContext {
    /**
     * First comparing iteration Id. Minimum value is 1.
     */
    firstComparingIteration: number;
    /**
     * Second comparing iteration Id. Minimum value is 1.
     */
    secondComparingIteration: number;
}
export interface CommentPosition {
    /**
     * Position line starting with one.
     */
    line: number;
    /**
     * Position offset starting with zero.
     */
    offset: number;
}
/**
 * Represents a given comment thread
 */
export interface CommentThread {
    _links: any;
    /**
     * A list of the comments.
     */
    comments: Comment[];
    /**
     * The comment thread id.
     */
    id: number;
    /**
     * Specify if the thread is deleted which happens when all comments are deleted
     */
    isDeleted: boolean;
    /**
     * The time this thread was last updated.
     */
    lastUpdatedDate: Date;
    /**
     * A list of (optional) thread properties.
     */
    properties: any;
    /**
     * The time this thread was published.
     */
    publishedDate: Date;
    /**
     * The status of the comment thread.
     */
    status: CommentThreadStatus;
    /**
     * Specify thread context such as position in left/right file.
     */
    threadContext: CommentThreadContext;
}
export interface CommentThreadContext {
    /**
     * File path relative to the root of the repository. It's up to the client to use any path format.
     */
    filePath: string;
    /**
     * Position of last character of the comment in left file.
     */
    leftFileEnd: CommentPosition;
    /**
     * Position of first character of the comment in left file.
     */
    leftFileStart: CommentPosition;
    /**
     * Position of last character of the comment in right file.
     */
    rightFileEnd: CommentPosition;
    /**
     * Position of first character of the comment in right file.
     */
    rightFileStart: CommentPosition;
}
export enum CommentThreadStatus {
    Unknown = 0,
    Active = 1,
    Fixed = 2,
    WontFix = 3,
    Closed = 4,
    ByDesign = 5,
    Pending = 6,
}
/**
 * Criteria to decide if and how a thread should be tracked
 */
export interface CommentTrackingCriteria {
    /**
     * The first comparing iteration being viewed. Threads will be tracked if this is greater than 0.
     */
    firstComparingIteration: number;
    /**
     * The second comparing iteration being viewed. Threads will be tracked if this is greater than 0.
     */
    secondComparingIteration: number;
}
export enum CommentType {
    /**
     * The comment type is not known.
     */
    Unknown = 0,
    /**
     * This is a regular user comment.
     */
    Text = 1,
    /**
     * The comment comes as a result of a code change.
     */
    CodeChange = 2,
    /**
     * The comment represents a system message.
     */
    System = 3,
}
export interface FileContentMetadata {
    contentType: string;
    encoding: number;
    extension: string;
    fileName: string;
    isBinary: boolean;
    isImage: boolean;
    vsLink: string;
}
export enum GitAsyncOperationStatus {
    Queued = 1,
    InProgress = 2,
    Completed = 3,
    Failed = 4,
    Abandoned = 5,
}
export interface GitAsyncRefOperation {
    _links: any;
    detailedStatus: GitAsyncRefOperationDetail;
    parameters: GitAsyncRefOperationParameters;
    status: GitAsyncOperationStatus;
    url: string;
}
export interface GitAsyncRefOperationDetail {
    conflict: boolean;
    currentCommitId: string;
    progress: number;
}
export interface GitAsyncRefOperationParameters {
    generatedRefName: string;
    ontoRefName: string;
    repository: GitRepository;
    source: GitAsyncRefOperationSource;
}
export interface GitAsyncRefOperationSource {
    commitList: GitCommitRef[];
    pullRequestId: number;
}
export interface GitBaseVersionDescriptor extends GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    baseVersion: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    baseVersionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    baseVersionType: GitVersionType;
}
export interface GitBlobRef {
    _links: any;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Size of blob content (in bytes)
     */
    size: number;
    url: string;
}
export interface GitBranchStats {
    aheadCount: number;
    behindCount: number;
    commit: GitCommitRef;
    isBaseVersion: boolean;
    name: string;
}
export interface GitChange extends Change<GitItem> {
    /**
     * Id of the change within the group.  For example, within the iteration
     */
    changeId: number;
    /**
     * New Content template to be used
     */
    newContentTemplate: GitTemplate;
    /**
     * Original path of item if different from current path
     */
    originalPath: string;
}
export interface GitCherryPick extends GitAsyncRefOperation {
    cherryPickId: number;
}
export interface GitCommit extends GitCommitRef {
    push: GitPushRef;
    treeId: string;
}
export interface GitCommitChanges {
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
}
export interface GitCommitDiffs {
    aheadCount: number;
    allChangesIncluded: boolean;
    baseCommit: string;
    behindCount: number;
    changeCounts: {
        [key: number]: number;
    };
    changes: GitChange[];
    commonCommit: string;
    targetCommit: string;
}
export interface GitCommitRef {
    _links: any;
    author: GitUserDate;
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
    comment: string;
    commentTruncated: boolean;
    commitId: string;
    committer: GitUserDate;
    parents: string[];
    remoteUrl: string;
    statuses: GitStatus[];
    url: string;
    workItems: VSS_Common_Contracts.ResourceRef[];
}
export interface GitCommitToCreate {
    baseRef: GitRef;
    comment: string;
    pathActions: GitPathAction[];
}
export interface GitConflict {
    _links: any;
    conflictId: number;
    conflictPath: string;
    conflictType: GitConflictType;
    mergeBaseCommit: GitCommitRef;
    mergeOrigin: GitMergeOriginRef;
    mergeSourceCommit: GitCommitRef;
    mergeTargetCommit: GitCommitRef;
    resolutionError: GitResolutionError;
    resolutionStatus: GitResolutionStatus;
    resolvedBy: VSS_Common_Contracts.IdentityRef;
    resolvedDate: Date;
    url: string;
}
/**
 * Data object for AddAdd conflict
 */
export interface GitConflictAddAdd extends GitConflict {
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}
/**
 * Data object for RenameAdd conflict
 */
export interface GitConflictAddRename extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
    targetOriginalPath: string;
}
/**
 * Data object for EditDelete conflict
 */
export interface GitConflictDeleteEdit extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    targetBlob: GitBlobRef;
}
/**
 * Data object for RenameDelete conflict
 */
export interface GitConflictDeleteRename extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    targetBlob: GitBlobRef;
    targetNewPath: string;
}
/**
 * Data object for FileDirectory conflict
 */
export interface GitConflictDirectoryFile extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceTree: GitTreeRef;
    targetBlob: GitBlobRef;
}
/**
 * Data object for DeleteEdit conflict
 */
export interface GitConflictEditDelete extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    sourceBlob: GitBlobRef;
}
/**
 * Data object for EditEdit conflict
 */
export interface GitConflictEditEdit extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}
/**
 * Data object for DirectoryFile conflict
 */
export interface GitConflictFileDirectory extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    targetTree: GitTreeRef;
}
/**
 * Data object for Rename1to2 conflict
 */
export interface GitConflictRename1to2 extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionRename1to2;
    sourceBlob: GitBlobRef;
    sourceNewPath: string;
    targetBlob: GitBlobRef;
    targetNewPath: string;
}
/**
 * Data object for Rename2to1 conflict
 */
export interface GitConflictRename2to1 extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceNewBlob: GitBlobRef;
    sourceOriginalBlob: GitBlobRef;
    sourceOriginalPath: string;
    targetNewBlob: GitBlobRef;
    targetOriginalBlob: GitBlobRef;
    targetOriginalPath: string;
}
/**
 * Data object for AddRename conflict
 */
export interface GitConflictRenameAdd extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    sourceOriginalPath: string;
    targetBlob: GitBlobRef;
}
/**
 * Data object for DeleteRename conflict
 */
export interface GitConflictRenameDelete extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    sourceBlob: GitBlobRef;
    sourceNewPath: string;
}
/**
 * Data object for RenameRename conflict
 */
export interface GitConflictRenameRename extends GitConflict {
    baseBlob: GitBlobRef;
    originalPath: string;
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}
export enum GitConflictType {
    /**
     * No conflict
     */
    None = 0,
    /**
     * Added on source and target; content differs
     */
    AddAdd = 1,
    /**
     * Added on source and rename destination on target
     */
    AddRename = 2,
    /**
     * Deleted on source and edited on target
     */
    DeleteEdit = 3,
    /**
     * Deleted on source and renamed on target
     */
    DeleteRename = 4,
    /**
     * Path is a directory on source and a file on target
     */
    DirectoryFile = 5,
    /**
     * Children of directory which has DirectoryFile or FileDirectory conflict
     */
    DirectoryChild = 6,
    /**
     * Edited on source and deleted on target
     */
    EditDelete = 7,
    /**
     * Edited on source and target; content differs
     */
    EditEdit = 8,
    /**
     * Path is a file on source and a directory on target
     */
    FileDirectory = 9,
    /**
     * Same file renamed on both source and target; destination paths differ
     */
    Rename1to2 = 10,
    /**
     * Different files renamed to same destination path on both source and target
     */
    Rename2to1 = 11,
    /**
     * Rename destination on source and new file on target
     */
    RenameAdd = 12,
    /**
     * Renamed on source and deleted on target
     */
    RenameDelete = 13,
    /**
     * Rename destination on both source and target; content differs
     */
    RenameRename = 14,
}
export interface GitDeletedRepository {
    createdDate: Date;
    deletedBy: VSS_Common_Contracts.IdentityRef;
    deletedDate: Date;
    id: string;
    name: string;
    project: TFS_Core_Contracts.TeamProjectReference;
}
export interface GitFilePathsCollection {
    commitId: string;
    paths: string[];
    url: string;
}
export interface GitHistoryQueryResults extends HistoryQueryResults<GitItem> {
    /**
     * Seed commit used for querying history.  Used for skip feature.
     */
    startingCommitId: string;
    unpopulatedCount: number;
    unprocessedCount: number;
}
export interface GitImportFailedEvent {
    sourceRepositoryName: string;
    targetRepository: GitRepository;
}
/**
 * Parameter for creating a git import request when source is Git version control
 */
export interface GitImportGitSource {
    /**
     * Url for the source repo
     */
    url: string;
}
export interface GitImportRequest {
    _links: any;
    detailedStatus: GitImportStatusDetail;
    importRequestId: number;
    /**
     * Parameters for creating an import request
     */
    parameters: GitImportRequestParameters;
    repository: GitRepository;
    status: GitAsyncOperationStatus;
    url: string;
}
/**
 * Parameters for creating an import request
 */
export interface GitImportRequestParameters {
    /**
     * Option to delete service endpoint when import is done
     */
    deleteServiceEndpointAfterImportIsDone: boolean;
    /**
     * Source for importing git repository
     */
    gitSource: GitImportGitSource;
    /**
     * Service Endpoint for connection to external endpoint
     */
    serviceEndpointId: string;
}
export interface GitImportStatusDetail {
    allSteps: string[];
    currentStep: number;
    errorMessage: string;
}
export interface GitImportSucceededEvent {
    sourceRepositoryName: string;
    targetRepository: GitRepository;
}
export interface GitItem extends ItemModel {
    /**
     * SHA1 of commit item was fetched at
     */
    commitId: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag, ...)
     */
    gitObjectType: GitObjectType;
    /**
     * Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached
     */
    latestProcessedChange: GitCommitRef;
    /**
     * Git object id
     */
    objectId: string;
    /**
     * Git object id
     */
    originalObjectId: string;
}
export interface GitItemDescriptor {
    /**
     * Path to item
     */
    path: string;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full), or None
     */
    recursionLevel: VersionControlRecursionType;
    /**
     * Version string (interpretation based on VersionType defined in subclass
     */
    version: string;
    /**
     * Version modifiers (e.g. previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * How to interpret version (branch,tag,commit)
     */
    versionType: GitVersionType;
}
export interface GitItemRequestData {
    /**
     * Whether to include metadata for all items
     */
    includeContentMetadata: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Collection of items to fetch, including path, version, and recursion level
     */
    itemDescriptors: GitItemDescriptor[];
    /**
     * Whether to include shallow ref to commit that last changed each item
     */
    latestProcessedChange: boolean;
}
export interface GitLastChangeItem {
    /**
     * Gets or sets the commit Id this item was modified most recently for the provided version.
     */
    commitId: string;
    /**
     * Gets or sets the path of the item.
     */
    path: string;
}
export interface GitLastChangeTreeItems {
    /**
     * The last change of items.
     */
    items: GitLastChangeItem[];
    /**
     * The last explored time, in case the result is not comprehensive. Null otherwise.
     */
    lastExploredTime: Date;
}
export interface GitMergeOriginRef {
}
export enum GitObjectType {
    Bad = 0,
    Commit = 1,
    Tree = 2,
    Blob = 3,
    Tag = 4,
    Ext2 = 5,
    OfsDelta = 6,
    RefDelta = 7,
}
export interface GitPathAction {
    action: GitPathActions;
    base64Content: string;
    path: string;
    rawTextContent: string;
    targetPath: string;
}
export enum GitPathActions {
    None = 0,
    Edit = 1,
    Delete = 2,
    Add = 3,
    Rename = 4,
}
export interface GitPathToItemsCollection {
    items: {
        [key: string]: GitItem[];
    };
}
export interface GitPullRequest {
    _links: any;
    artifactId: string;
    autoCompleteSetBy: VSS_Common_Contracts.IdentityRef;
    closedBy: VSS_Common_Contracts.IdentityRef;
    closedDate: Date;
    codeReviewId: number;
    commits: GitCommitRef[];
    completionOptions: GitPullRequestCompletionOptions;
    completionQueueTime: Date;
    createdBy: VSS_Common_Contracts.IdentityRef;
    creationDate: Date;
    description: string;
    lastMergeCommit: GitCommitRef;
    lastMergeSourceCommit: GitCommitRef;
    lastMergeTargetCommit: GitCommitRef;
    mergeId: string;
    mergeStatus: PullRequestAsyncStatus;
    pullRequestId: number;
    remoteUrl: string;
    repository: GitRepository;
    reviewers: IdentityRefWithVote[];
    sourceRefName: string;
    status: PullRequestStatus;
    supportsIterations: boolean;
    targetRefName: string;
    title: string;
    url: string;
    workItemRefs: VSS_Common_Contracts.ResourceRef[];
}
export interface GitPullRequestChange extends GitChange {
    /**
     * Id used to track files through multiple changes
     */
    changeTrackingId: number;
}
/**
 * Represents a given user or system Pull Request comment thread
 */
export interface GitPullRequestCommentThread extends CommentThread {
    /**
     * Extended context information unique to pull requests
     */
    pullRequestThreadContext: GitPullRequestCommentThreadContext;
}
export interface GitPullRequestCommentThreadContext {
    /**
     * Used to track a comment across iterations. This value can be found by looking at the iteration's changes list. Must be set for pull requests with iteration support. Otherwise, it's not required for 'legacy' pull requests.
     */
    changeTrackingId: number;
    /**
     * Specify comparing iteration Ids when a comment thread is added while comparing 2 iterations.
     */
    iterationContext: CommentIterationContext;
    /**
     * The criteria used to track this thread. If this property is filled out when the thread is returned, then the thread has been tracked from its original location using the given criteria.
     */
    trackingCriteria: CommentTrackingCriteria;
}
export interface GitPullRequestCompletionOptions {
    deleteSourceBranch: boolean;
    mergeCommitMessage: string;
    squashMerge: boolean;
}
export interface GitPullRequestIteration {
    _links: any;
    author: VSS_Common_Contracts.IdentityRef;
    changeList: GitPullRequestChange[];
    commits: GitCommitRef[];
    commonRefCommit: GitCommitRef;
    createdDate: Date;
    description: string;
    hasMoreCommits: boolean;
    id: number;
    push: GitPushRef;
    sourceRefCommit: GitCommitRef;
    targetRefCommit: GitCommitRef;
    updatedDate: Date;
}
export interface GitPullRequestIterationChanges {
    changeEntries: GitPullRequestChange[];
    nextSkip: number;
    nextTop: number;
}
export interface GitPullRequestMergeOriginRef extends GitMergeOriginRef {
    pullRequestId: number;
}
/**
 * A pull request query
 */
export interface GitPullRequestQuery {
    /**
     * The query to perform
     */
    queries: GitPullRequestQueryInput[];
    /**
     * The results of the query
     */
    results: {
        [key: string]: GitPullRequest[];
    }[];
}
/**
 * The input required for a pull request query. Currently there is only one query: LastMergeCommit, which returns all pull requests whose LastMergeCommit is in the list of CommitIds.
 */
export interface GitPullRequestQueryInput {
    /**
     * The list commit ids to search for.
     */
    items: string[];
    /**
     * The type of query to perform
     */
    type: GitPullRequestQueryType;
}
export enum GitPullRequestQueryType {
    /**
     * No query type set
     */
    NotSet = 0,
    /**
     * search by merge commit
     */
    LastMergeCommit = 1,
    /**
     * search by commit
     */
    Commit = 2,
}
export interface GitPullRequestReviewFileContentInfo {
    _links: any;
    /**
     * The file change path.
     */
    path: string;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the client by using SHA1 hash function. Ensure that uploaded file has same encoding as in source control.
     */
    sHA1Hash: string;
}
export enum GitPullRequestReviewFileType {
    ChangeEntry = 0,
    Attachment = 1,
}
export interface GitPullRequestSearchCriteria {
    creatorId: string;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    repositoryId: string;
    reviewerId: string;
    sourceRefName: string;
    status: PullRequestStatus;
    targetRefName: string;
}
/**
 * This class contains the metadata of a service/extension posting status. Status can be associated with a pull request or an iteration.
 */
export interface GitPullRequestStatus extends GitStatus {
    iterationId: number;
}
export interface GitPush extends GitPushRef {
    commits: GitCommitRef[];
    refUpdates: GitRefUpdate[];
    repository: GitRepository;
}
export interface GitPushEventData {
    afterId: string;
    beforeId: string;
    branch: string;
    commits: GitCommit[];
    repository: GitRepository;
}
export interface GitPushRef {
    _links: any;
    date: Date;
    pushCorrelationId: string;
    pushedBy: VSS_Common_Contracts.IdentityRef;
    pushId: number;
    url: string;
}
export interface GitPushSearchCriteria {
    fromDate: Date;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    includeRefUpdates: boolean;
    pusherId: string;
    refName: string;
    toDate: Date;
}
export interface GitQueryBranchStatsCriteria {
    baseCommit: GitVersionDescriptor;
    targetCommits: GitVersionDescriptor[];
}
export interface GitQueryCommitsCriteria {
    /**
     * Number of entries to skip
     */
    $skip: number;
    /**
     * Maximum number of entries to retrieve
     */
    $top: number;
    /**
     * Alias or display name of the author
     */
    author: string;
    /**
     * If provided, the earliest commit in the graph to search
     */
    compareVersion: GitVersionDescriptor;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes: boolean;
    /**
     * If provided, a lower bound for filtering commits alphabetically
     */
    fromCommitId: string;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate: string;
    /**
     * If provided, specifies the exact commit ids of the commits to fetch. May not be combined with other parameters.
     */
    ids: string[];
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Whether to include linked work items
     */
    includeWorkItems: boolean;
    /**
     * Path of item to search under
     */
    itemPath: string;
    /**
     * If provided, identifies the commit or branch to search
     */
    itemVersion: GitVersionDescriptor;
    /**
     * If provided, an upper bound for filtering commits alphabetically
     */
    toCommitId: string;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate: string;
    /**
     * Alias or display name of the committer
     */
    user: string;
}
export interface GitRef {
    _links: any;
    isLockedBy: VSS_Common_Contracts.IdentityRef;
    name: string;
    objectId: string;
    peeledObjectId: string;
    statuses: GitStatus[];
    url: string;
}
export interface GitRefFavorite {
    _links: any;
    id: number;
    identityId: string;
    name: string;
    repositoryId: string;
    type: RefFavoriteType;
    url: string;
}
export interface GitRefLockRequest {
    lock: boolean;
    name: string;
}
export interface GitRefUpdate {
    name: string;
    newObjectId: string;
    oldObjectId: string;
    repositoryId: string;
}
export enum GitRefUpdateMode {
    /**
     * Indicates the Git protocol model where any refs that can be updated will be updated, but any failures will not prevent other updates from succeeding.
     */
    BestEffort = 0,
    /**
     * Indicates that all ref updates must succeed or none will succeed. All ref updates will be atomically written. If any failure is encountered, previously successful updates will be rolled back and the entire operation will fail.
     */
    AllOrNone = 1,
}
export interface GitRefUpdateResult {
    /**
     * Custom message for the result object For instance, Reason for failing.
     */
    customMessage: string;
    /**
     * Ref name
     */
    name: string;
    /**
     * New object ID
     */
    newObjectId: string;
    /**
     * Old object ID
     */
    oldObjectId: string;
    /**
     * Name of the plugin that rejected the updated.
     */
    rejectedBy: string;
    /**
     * Repository ID
     */
    repositoryId: string;
    /**
     * True if the ref update succeeded, false otherwise
     */
    success: boolean;
    /**
     * Status of the update from the TFS server.
     */
    updateStatus: GitRefUpdateStatus;
}
export interface GitRefUpdateResultSet {
    countFailed: number;
    countSucceeded: number;
    pushCorrelationId: string;
    pushIds: {
        [key: string]: number;
    };
    pushTime: Date;
    results: GitRefUpdateResult[];
}
export enum GitRefUpdateStatus {
    /**
     * Indicates that the ref update request was completed successfully.
     */
    Succeeded = 0,
    /**
     * Indicates that the ref update request could not be completed because part of the graph would be disconnected by this change, and the caller does not have ForcePush permission on the repository.
     */
    ForcePushRequired = 1,
    /**
     * Indicates that the ref update request could not be completed because the old object ID presented in the request was not the object ID of the ref when the database attempted the update. The most likely scenario is that the caller lost a race to update the ref.
     */
    StaleOldObjectId = 2,
    /**
     * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
     */
    InvalidRefName = 3,
    /**
     * The request was not processed
     */
    Unprocessed = 4,
    /**
     * The ref update request could not be completed because the new object ID for the ref could not be resolved to a commit object (potentially through any number of tags)
     */
    UnresolvableToCommit = 5,
    /**
     * The ref update request could not be completed because the user lacks write permissions required to write this ref
     */
    WritePermissionRequired = 6,
    /**
     * The ref update request could not be completed because the user lacks note creation permissions required to write this note
     */
    ManageNotePermissionRequired = 7,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a branch
     */
    CreateBranchPermissionRequired = 8,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a tag
     */
    CreateTagPermissionRequired = 9,
    /**
     * The ref update could not be completed because it was rejected by the plugin.
     */
    RejectedByPlugin = 10,
    /**
     * The ref update could not be completed because the ref is locked by another user.
     */
    Locked = 11,
    /**
     * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
     */
    RefNameConflict = 12,
    /**
     * The ref update could not be completed because it was rejected by policy.
     */
    RejectedByPolicy = 13,
    /**
     * Indicates that the ref update request was completed successfully, but the ref doesn't actually exist so no changes were made.  This should only happen during deletes.
     */
    SucceededNonExistentRef = 14,
    /**
     * Indicates that the ref update request was completed successfully, but the passed-in ref was corrupt - as in, the old object ID was bad.  This should only happen during deletes.
     */
    SucceededCorruptRef = 15,
}
export interface GitRepository {
    _links: any;
    defaultBranch: string;
    id: string;
    name: string;
    project: TFS_Core_Contracts.TeamProjectReference;
    remoteUrl: string;
    url: string;
    validRemoteUrls: string[];
}
export interface GitRepositoryStats {
    activePullRequestsCount: number;
    branchesCount: number;
    commitsCount: number;
    repositoryId: string;
}
export interface GitResolution {
}
export enum GitResolutionError {
    /**
     * No error
     */
    None = 0,
    /**
     * User set a blob id for resolving a content merge, but blob was not found in repo during application
     */
    MergeContentNotFound = 1,
    /**
     * Attempted to resolve a conflict by moving a file to another path, but path was already in use
     */
    PathInUse = 2,
    /**
     * No error
     */
    InvalidPath = 3,
    /**
     * GitResolutionAction was set to an unrecognized value
     */
    UnknownAction = 4,
    /**
     * GitResolutionMergeType was set to an unrecognized value
     */
    UnknownMergeType = 5,
    /**
     * Any error for which a more specific code doesn't apply
     */
    OtherError = 255,
}
export interface GitResolutionMergeContent extends GitResolution {
    mergeType: GitResolutionMergeType;
    userMergedBlob: GitBlobRef;
    userMergedContent: number[];
}
export enum GitResolutionMergeType {
    Undecided = 0,
    TakeSourceContent = 1,
    TakeTargetContent = 2,
    AutoMerged = 3,
    UserMerged = 4,
}
export interface GitResolutionPathConflict extends GitResolution {
    action: GitResolutionPathConflictAction;
    renamePath: string;
}
export enum GitResolutionPathConflictAction {
    Undecided = 0,
    KeepSourceRenameTarget = 1,
    KeepSourceDeleteTarget = 2,
    KeepTargetRenameSource = 3,
    KeepTargetDeleteSource = 4,
}
export interface GitResolutionPickOneAction extends GitResolution {
    action: GitResolutionWhichAction;
}
export interface GitResolutionRename1to2 extends GitResolutionMergeContent {
    action: GitResolutionRename1to2Action;
}
export enum GitResolutionRename1to2Action {
    Undecided = 0,
    KeepSourcePath = 1,
    KeepTargetPath = 2,
    KeepBothFiles = 3,
}
export enum GitResolutionStatus {
    Unresolved = 0,
    PartiallyResolved = 1,
    Resolved = 2,
}
export enum GitResolutionWhichAction {
    Undecided = 0,
    PickSourceAction = 1,
    PickTargetAction = 2,
}
export interface GitRevert extends GitAsyncRefOperation {
    revertId: number;
}
export interface GitStatus {
    _links: any;
    context: GitStatusContext;
    createdBy: VSS_Common_Contracts.IdentityRef;
    creationDate: Date;
    description: string;
    state: GitStatusState;
    targetUrl: string;
    updatedDate: Date;
}
export interface GitStatusContext {
    genre: string;
    name: string;
}
export enum GitStatusState {
    NotSet = 0,
    Pending = 1,
    Succeeded = 2,
    Failed = 3,
    Error = 4,
}
export interface GitSuggestion {
    properties: {
        [key: string]: any;
    };
    type: string;
}
export interface GitTargetVersionDescriptor extends GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    targetVersion: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    targetVersionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    targetVersionType: GitVersionType;
}
export interface GitTemplate {
    /**
     * Name of the Template
     */
    name: string;
    /**
     * Type of the Template
     */
    type: string;
}
export interface GitTreeDiff {
    /**
     * ObjectId of the base tree of this diff.
     */
    baseTreeId: string;
    /**
     * List of tree entries that differ between the base and target tree.  Renames and object type changes are returned as a delete for the old object and add for the new object.  If a continuation token is returned in the response header, some tree entries are yet to be processed and may yeild more diff entries. If the continuation token is not returned all the diff entries have been included in this response.
     */
    diffEntries: GitTreeDiffEntry[];
    /**
     * ObjectId of the target tree of this diff.
     */
    targetTreeId: string;
    /**
     * REST Url to this resource.
     */
    url: string;
}
export interface GitTreeDiffEntry {
    /**
     * SHA1 hash of the object in the base tree, if it exists. Will be null in case of adds.
     */
    baseObjectId: string;
    /**
     * Type of change that affected this entry.
     */
    changeType: VersionControlChangeType;
    /**
     * Object type of the tree entry. Blob, Tree or Commit("submodule")
     */
    objectType: GitObjectType;
    /**
     * Relative path in base and target trees.
     */
    path: string;
    /**
     * SHA1 hash of the object in the target tree, if it exists. Will be null in case of deletes.
     */
    targetObjectId: string;
}
export interface GitTreeDiffResponse {
    /**
     * The HTTP client methods find the continuation token header in the response and populate this field.
     */
    continuationToken: string[];
    treeDiff: GitTreeDiff;
}
export interface GitTreeEntryRef {
    /**
     * Blob or tree
     */
    gitObjectType: GitObjectType;
    /**
     * Mode represented as octal string
     */
    mode: string;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Path relative to parent tree object
     */
    relativePath: string;
    /**
     * Size of content
     */
    size: number;
    /**
     * url to retrieve tree or blob
     */
    url: string;
}
export interface GitTreeRef {
    _links: any;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Sum of sizes of all children
     */
    size: number;
    /**
     * Blobs and trees under this tree
     */
    treeEntries: GitTreeEntryRef[];
    /**
     * Url to tree
     */
    url: string;
}
export interface GitUserDate {
    date: Date;
    email: string;
    name: string;
}
export interface GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch/index, SHA1 of commit)
     */
    version: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, commit, or index). Determines how Id is interpreted
     */
    versionType: GitVersionType;
}
export enum GitVersionOptions {
    /**
     * Not specified
     */
    None = 0,
    /**
     * Commit that changed item prior to the current version
     */
    PreviousChange = 1,
    /**
     * First parent of commit (HEAD^)
     */
    FirstParent = 2,
}
export enum GitVersionType {
    /**
     * Interpret the version as a branch name
     */
    Branch = 0,
    /**
     * Interpret the version as a tag name
     */
    Tag = 1,
    /**
     * Interpret the version as a commit ID (SHA1)
     */
    Commit = 2,
    /**
     * Interpret the version as an index name
     */
    Index = 3,
}
export interface HistoryEntry<T> {
    /**
     * The Change list (changeset/commit/shelveset) for this point in history
     */
    changeList: ChangeList<T>;
    /**
     * The change made to the item from this change list (only relevant for File history, not folders)
     */
    itemChangeType: VersionControlChangeType;
    /**
     * The path of the item at this point in history (only relevant for File history, not folders)
     */
    serverItem: string;
}
export interface HistoryQueryResults<T> {
    /**
     * True if there are more results available to fetch (we're returning the max # of items requested) A more RESTy solution would be to include a Link header
     */
    moreResultsAvailable: boolean;
    /**
     * The history entries (results) from this query
     */
    results: HistoryEntry<T>[];
}
export interface IdentityRefWithVote extends VSS_Common_Contracts.IdentityRef {
    isRequired: boolean;
    reviewerUrl: string;
    vote: number;
    votedFor: IdentityRefWithVote[];
}
export interface IncludedGitCommit {
    commitId: string;
    commitTime: Date;
    parentCommitIds: string[];
    repositoryId: string;
}
export interface ItemContent {
    content: string;
    contentType: ItemContentType;
}
export enum ItemContentType {
    RawText = 0,
    Base64Encoded = 1,
}
/**
 * Optional details to include when returning an item model
 */
export interface ItemDetailsOptions {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata: boolean;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full) or None for folder items
     */
    recursionLevel: VersionControlRecursionType;
}
export interface ItemModel {
    _links: any;
    contentMetadata: FileContentMetadata;
    isFolder: boolean;
    isSymLink: boolean;
    path: string;
    url: string;
}
export enum PullRequestAsyncStatus {
    NotSet = 0,
    Queued = 1,
    Conflicts = 2,
    Succeeded = 3,
    RejectedByPolicy = 4,
    Failure = 5,
}
export enum PullRequestStatus {
    NotSet = 0,
    Active = 1,
    Abandoned = 2,
    Completed = 3,
    All = 4,
}
/**
 * Initial config contract sent to extensions creating tabs on the pull request page
 */
export interface PullRequestTabExtensionConfig {
    pullRequestId: number;
    repositoryId: string;
}
export enum RefFavoriteType {
    Invalid = 0,
    Folder = 1,
    Ref = 2,
}
export interface RemoteRepositoryValidation {
    password: string;
    url: string;
    username: string;
}
/**
 * Context used while sharing a pull request.
 */
export interface ShareNotificationContext {
    /**
     * Optional user note or message.
     */
    message: string;
    /**
     * Identities of users who will receive a share notification.
     */
    receivers: VSS_Common_Contracts.IdentityRef[];
}
/**
 * Represents a Supported IDE entity.
 */
export interface SupportedIde {
    /**
     * The download URL for the IDE.
     */
    downloadUrl: string;
    /**
     * The type of the IDE.
     */
    ideType: SupportedIdeType;
    /**
     * The name of the IDE.
     */
    name: string;
    /**
     * The URL to open the protocol handler for the IDE.
     */
    protocolHandlerUrl: string;
    /**
     * A list of SupportedPlatforms.
     */
    supportedPlatforms: string[];
}
export enum SupportedIdeType {
    Unknown = 0,
    AndroidStudio = 1,
    AppCode = 2,
    CLion = 3,
    DataGrip = 4,
    Eclipse = 13,
    IntelliJ = 5,
    MPS = 6,
    PhpStorm = 7,
    PyCharm = 8,
    RubyMine = 9,
    Tower = 10,
    VisualStudio = 11,
    WebStorm = 12,
}
export interface TfvcBranch extends TfvcBranchRef {
    children: TfvcBranch[];
    mappings: TfvcBranchMapping[];
    parent: TfvcShallowBranchRef;
    relatedBranches: TfvcShallowBranchRef[];
}
export interface TfvcBranchMapping {
    depth: string;
    serverItem: string;
    type: string;
}
export interface TfvcBranchRef extends TfvcShallowBranchRef {
    _links: any;
    createdDate: Date;
    description: string;
    isDeleted: boolean;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcChange extends Change<TfvcItem> {
    /**
     * List of merge sources in case of rename or branch creation.
     */
    mergeSources: TfvcMergeSource[];
    /**
     * Version at which a (shelved) change was pended against
     */
    pendingVersion: number;
}
export interface TfvcChangeset extends TfvcChangesetRef {
    accountId: string;
    changes: TfvcChange[];
    checkinNotes: CheckinNote[];
    collectionId: string;
    hasMoreChanges: boolean;
    policyOverride: TfvcPolicyOverrideInfo;
    teamProjectIds: string[];
    workItems: AssociatedWorkItem[];
}
export interface TfvcChangesetRef {
    _links: any;
    author: VSS_Common_Contracts.IdentityRef;
    changesetId: number;
    checkedInBy: VSS_Common_Contracts.IdentityRef;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    url: string;
}
/**
 * Criteria used in a search for change lists
 */
export interface TfvcChangesetSearchCriteria {
    /**
     * Alias or display name of user who made the changes
     */
    author: string;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames: boolean;
    /**
     * If provided, only include changesets created after this date (string) Think of a better name for this.
     */
    fromDate: string;
    /**
     * If provided, only include changesets after this changesetID
     */
    fromId: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Path of item to search under
     */
    itemPath: string;
    /**
     * If provided, only include changesets created before this date (string) Think of a better name for this.
     */
    toDate: string;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toId: number;
}
export interface TfvcChangesetsRequestData {
    changesetIds: number[];
    commentLength: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
}
export interface TfvcCheckinEventData {
    changeset: TfvcChangeset;
    project: TFS_Core_Contracts.TeamProjectReference;
}
export interface TfvcHistoryEntry extends HistoryEntry<TfvcItem> {
    /**
     * The encoding of the item at this point in history (only relevant for File history, not folders)
     */
    encoding: number;
    /**
     * The file id of the item at this point in history (only relevant for File history, not folders)
     */
    fileId: number;
}
export interface TfvcItem extends ItemModel {
    changeDate: Date;
    deletionId: number;
    /**
     * MD5 hash as a base 64 string, applies to files only.
     */
    hashValue: string;
    isBranch: boolean;
    isPendingChange: boolean;
    /**
     * The size of the file, if applicable.
     */
    size: number;
    version: number;
}
/**
 * Item path and Version descriptor properties
 */
export interface TfvcItemDescriptor {
    path: string;
    recursionLevel: VersionControlRecursionType;
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}
export interface TfvcItemRequestData {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    itemDescriptors: TfvcItemDescriptor[];
}
export interface TfvcLabel extends TfvcLabelRef {
    items: TfvcItem[];
}
export interface TfvcLabelRef {
    _links: any;
    description: string;
    id: number;
    labelScope: string;
    modifiedDate: Date;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcLabelRequestData {
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    itemLabelFilter: string;
    labelScope: string;
    maxItemCount: number;
    name: string;
    owner: string;
}
export interface TfvcMergeSource {
    /**
     * Indicates if this a rename source. If false, it is a merge source.
     */
    isRename: boolean;
    /**
     * The server item of the merge source
     */
    serverItem: string;
    /**
     * Start of the version range
     */
    versionFrom: number;
    /**
     * End of the version range
     */
    versionTo: number;
}
export interface TfvcPolicyFailureInfo {
    message: string;
    policyName: string;
}
export interface TfvcPolicyOverrideInfo {
    comment: string;
    policyFailures: TfvcPolicyFailureInfo[];
}
export interface TfvcShallowBranchRef {
    path: string;
}
/**
 * This is the deep shelveset class
 */
export interface TfvcShelveset extends TfvcShelvesetRef {
    changes: TfvcChange[];
    notes: CheckinNote[];
    policyOverride: TfvcPolicyOverrideInfo;
    workItems: AssociatedWorkItem[];
}
/**
 * This is the shallow shelveset class
 */
export interface TfvcShelvesetRef {
    _links: any;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    id: string;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcShelvesetRequestData {
    /**
     * Whether to include policyOverride and notes Only applies when requesting a single deep shelveset
     */
    includeDetails: boolean;
    /**
     * Whether to include the _links field on the shallow references. Does not apply when requesting a single deep shelveset object. Links will always be included in the deep shelveset.
     */
    includeLinks: boolean;
    /**
     * Whether to include workItems
     */
    includeWorkItems: boolean;
    /**
     * Max number of changes to include
     */
    maxChangeCount: number;
    /**
     * Max length of comment
     */
    maxCommentLength: number;
    /**
     * Shelveset's name
     */
    name: string;
    /**
     * Owner's ID. Could be a name or a guid.
     */
    owner: string;
}
export interface TfvcVersionDescriptor {
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}
export enum TfvcVersionOption {
    None = 0,
    Previous = 1,
    UseRename = 2,
}
export enum TfvcVersionType {
    None = 0,
    Changeset = 1,
    Shelveset = 2,
    Change = 3,
    Date = 4,
    Latest = 5,
    Tip = 6,
    MergeSource = 7,
}
export interface UpdateRefsRequest {
    refUpdateRequests: GitRefUpdate[];
    updateMode: GitRefUpdateMode;
}
export enum VersionControlChangeType {
    None = 0,
    Add = 1,
    Edit = 2,
    Encoding = 4,
    Rename = 8,
    Delete = 16,
    Undelete = 32,
    Branch = 64,
    Merge = 128,
    Lock = 256,
    Rollback = 512,
    SourceRename = 1024,
    TargetRename = 2048,
    Property = 4096,
    All = 8191,
}
export interface VersionControlProjectInfo {
    defaultSourceControlType: TFS_Core_Contracts.SourceControlTypes;
    project: TFS_Core_Contracts.TeamProjectReference;
    supportsGit: boolean;
    supportsTFVC: boolean;
}
export enum VersionControlRecursionType {
    /**
     * Only return the specified item.
     */
    None = 0,
    /**
     * Return the specified item and its direct children.
     */
    OneLevel = 1,
    /**
     * Return the specified item and its direct children, as well as recursive chains of nested child folders that only contain a single folder.
     */
    OneLevelPlusNestedEmptyFolders = 4,
    /**
     * Return specified item and all descendants
     */
    Full = 120,
}
export var TypeInfo: {
    Attachment: any;
    Change: any;
    ChangeList: any;
    Comment: any;
    CommentThread: any;
    CommentThreadStatus: {
        enumValues: {
            "unknown": number;
            "active": number;
            "fixed": number;
            "wontFix": number;
            "closed": number;
            "byDesign": number;
            "pending": number;
        };
    };
    CommentType: {
        enumValues: {
            "unknown": number;
            "text": number;
            "codeChange": number;
            "system": number;
        };
    };
    GitAsyncOperationStatus: {
        enumValues: {
            "queued": number;
            "inProgress": number;
            "completed": number;
            "failed": number;
            "abandoned": number;
        };
    };
    GitAsyncRefOperation: any;
    GitAsyncRefOperationParameters: any;
    GitAsyncRefOperationSource: any;
    GitBaseVersionDescriptor: any;
    GitBranchStats: any;
    GitChange: any;
    GitCherryPick: any;
    GitCommit: any;
    GitCommitChanges: any;
    GitCommitDiffs: any;
    GitCommitRef: any;
    GitCommitToCreate: any;
    GitConflict: any;
    GitConflictAddAdd: any;
    GitConflictAddRename: any;
    GitConflictDeleteEdit: any;
    GitConflictDeleteRename: any;
    GitConflictDirectoryFile: any;
    GitConflictEditDelete: any;
    GitConflictEditEdit: any;
    GitConflictFileDirectory: any;
    GitConflictRename1to2: any;
    GitConflictRename2to1: any;
    GitConflictRenameAdd: any;
    GitConflictRenameDelete: any;
    GitConflictRenameRename: any;
    GitConflictType: {
        enumValues: {
            "none": number;
            "addAdd": number;
            "addRename": number;
            "deleteEdit": number;
            "deleteRename": number;
            "directoryFile": number;
            "directoryChild": number;
            "editDelete": number;
            "editEdit": number;
            "fileDirectory": number;
            "rename1to2": number;
            "rename2to1": number;
            "renameAdd": number;
            "renameDelete": number;
            "renameRename": number;
        };
    };
    GitDeletedRepository: any;
    GitHistoryQueryResults: any;
    GitImportRequest: any;
    GitItem: any;
    GitItemDescriptor: any;
    GitItemRequestData: any;
    GitLastChangeTreeItems: any;
    GitObjectType: {
        enumValues: {
            "bad": number;
            "commit": number;
            "tree": number;
            "blob": number;
            "tag": number;
            "ext2": number;
            "ofsDelta": number;
            "refDelta": number;
        };
    };
    GitPathAction: any;
    GitPathActions: {
        enumValues: {
            "none": number;
            "edit": number;
            "delete": number;
            "add": number;
            "rename": number;
        };
    };
    GitPathToItemsCollection: any;
    GitPullRequest: any;
    GitPullRequestChange: any;
    GitPullRequestCommentThread: any;
    GitPullRequestIteration: any;
    GitPullRequestIterationChanges: any;
    GitPullRequestQuery: any;
    GitPullRequestQueryInput: any;
    GitPullRequestQueryType: {
        enumValues: {
            "notSet": number;
            "lastMergeCommit": number;
            "commit": number;
        };
    };
    GitPullRequestReviewFileType: {
        enumValues: {
            "changeEntry": number;
            "attachment": number;
        };
    };
    GitPullRequestSearchCriteria: any;
    GitPullRequestStatus: any;
    GitPush: any;
    GitPushEventData: any;
    GitPushRef: any;
    GitPushSearchCriteria: any;
    GitQueryBranchStatsCriteria: any;
    GitQueryCommitsCriteria: any;
    GitRef: any;
    GitRefFavorite: any;
    GitRefUpdateMode: {
        enumValues: {
            "bestEffort": number;
            "allOrNone": number;
        };
    };
    GitRefUpdateResult: any;
    GitRefUpdateResultSet: any;
    GitRefUpdateStatus: {
        enumValues: {
            "succeeded": number;
            "forcePushRequired": number;
            "staleOldObjectId": number;
            "invalidRefName": number;
            "unprocessed": number;
            "unresolvableToCommit": number;
            "writePermissionRequired": number;
            "manageNotePermissionRequired": number;
            "createBranchPermissionRequired": number;
            "createTagPermissionRequired": number;
            "rejectedByPlugin": number;
            "locked": number;
            "refNameConflict": number;
            "rejectedByPolicy": number;
            "succeededNonExistentRef": number;
            "succeededCorruptRef": number;
        };
    };
    GitResolutionError: {
        enumValues: {
            "none": number;
            "mergeContentNotFound": number;
            "pathInUse": number;
            "invalidPath": number;
            "unknownAction": number;
            "unknownMergeType": number;
            "otherError": number;
        };
    };
    GitResolutionMergeContent: any;
    GitResolutionMergeType: {
        enumValues: {
            "undecided": number;
            "takeSourceContent": number;
            "takeTargetContent": number;
            "autoMerged": number;
            "userMerged": number;
        };
    };
    GitResolutionPathConflict: any;
    GitResolutionPathConflictAction: {
        enumValues: {
            "undecided": number;
            "keepSourceRenameTarget": number;
            "keepSourceDeleteTarget": number;
            "keepTargetRenameSource": number;
            "keepTargetDeleteSource": number;
        };
    };
    GitResolutionPickOneAction: any;
    GitResolutionRename1to2: any;
    GitResolutionRename1to2Action: {
        enumValues: {
            "undecided": number;
            "keepSourcePath": number;
            "keepTargetPath": number;
            "keepBothFiles": number;
        };
    };
    GitResolutionStatus: {
        enumValues: {
            "unresolved": number;
            "partiallyResolved": number;
            "resolved": number;
        };
    };
    GitResolutionWhichAction: {
        enumValues: {
            "undecided": number;
            "pickSourceAction": number;
            "pickTargetAction": number;
        };
    };
    GitRevert: any;
    GitStatus: any;
    GitStatusState: {
        enumValues: {
            "notSet": number;
            "pending": number;
            "succeeded": number;
            "failed": number;
            "error": number;
        };
    };
    GitTargetVersionDescriptor: any;
    GitTreeDiff: any;
    GitTreeDiffEntry: any;
    GitTreeDiffResponse: any;
    GitTreeEntryRef: any;
    GitTreeRef: any;
    GitUserDate: any;
    GitVersionDescriptor: any;
    GitVersionOptions: {
        enumValues: {
            "none": number;
            "previousChange": number;
            "firstParent": number;
        };
    };
    GitVersionType: {
        enumValues: {
            "branch": number;
            "tag": number;
            "commit": number;
            "index": number;
        };
    };
    HistoryEntry: any;
    HistoryQueryResults: any;
    IncludedGitCommit: any;
    ItemContent: any;
    ItemContentType: {
        enumValues: {
            "rawText": number;
            "base64Encoded": number;
        };
    };
    ItemDetailsOptions: any;
    PullRequestAsyncStatus: {
        enumValues: {
            "notSet": number;
            "queued": number;
            "conflicts": number;
            "succeeded": number;
            "rejectedByPolicy": number;
            "failure": number;
        };
    };
    PullRequestStatus: {
        enumValues: {
            "notSet": number;
            "active": number;
            "abandoned": number;
            "completed": number;
            "all": number;
        };
    };
    RefFavoriteType: {
        enumValues: {
            "invalid": number;
            "folder": number;
            "ref": number;
        };
    };
    SupportedIde: any;
    SupportedIdeType: {
        enumValues: {
            "unknown": number;
            "androidStudio": number;
            "appCode": number;
            "cLion": number;
            "dataGrip": number;
            "eclipse": number;
            "intelliJ": number;
            "mPS": number;
            "phpStorm": number;
            "pyCharm": number;
            "rubyMine": number;
            "tower": number;
            "visualStudio": number;
            "webStorm": number;
        };
    };
    TfvcBranch: any;
    TfvcBranchRef: any;
    TfvcChange: any;
    TfvcChangeset: any;
    TfvcChangesetRef: any;
    TfvcCheckinEventData: any;
    TfvcHistoryEntry: any;
    TfvcItem: any;
    TfvcItemDescriptor: any;
    TfvcItemRequestData: any;
    TfvcLabel: any;
    TfvcLabelRef: any;
    TfvcShelveset: any;
    TfvcShelvesetRef: any;
    TfvcVersionDescriptor: any;
    TfvcVersionOption: {
        enumValues: {
            "none": number;
            "previous": number;
            "useRename": number;
        };
    };
    TfvcVersionType: {
        enumValues: {
            "none": number;
            "changeset": number;
            "shelveset": number;
            "change": number;
            "date": number;
            "latest": number;
            "tip": number;
            "mergeSource": number;
        };
    };
    UpdateRefsRequest: any;
    VersionControlChangeType: {
        enumValues: {
            "none": number;
            "add": number;
            "edit": number;
            "encoding": number;
            "rename": number;
            "delete": number;
            "undelete": number;
            "branch": number;
            "merge": number;
            "lock": number;
            "rollback": number;
            "sourceRename": number;
            "targetRename": number;
            "property": number;
            "all": number;
        };
    };
    VersionControlProjectInfo: any;
    VersionControlRecursionType: {
        enumValues: {
            "none": number;
            "oneLevel": number;
            "oneLevelPlusNestedEmptyFolders": number;
            "full": number;
        };
    };
};
}
declare module "TFS/VersionControl/Controls" {
/// <reference types="jquery" />
/// <reference types="jqueryui" />
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
import VCContracts = require("TFS/VersionControl/Contracts");
export interface IHistoryList {
    /**
    *  Query the history by providing certain searchCriteria
    * @param itemPaths single or multiple itemPaths for control to search history in Git and Tfvc
    * @param fromVersion fromId for control to search history in Git and Tfvc
    * @param toVersion toId for control to search history in Git and Tfvc
    * @param repositoryId Optional repository Id for control to search history in Git
    */
    createHistoryList(itemPaths: string[] | string, fromVersion: string, toVersion: string, repositoryId?: string): any;
}
/**
* Control showing the history list control
*/
export module HistoryList {
    var contributionId: string;
    /**
    * Create an instance of the history list control
    *
    * @param $container Container element to create the history list control in
    * @param options History list control options
    * @param webContext Optional web context to scope the control to
    */
    function create($container: JQuery, options?: any, webContext?: Contracts_Platform.WebContext): IPromise<IHistoryList>;
}
/**
* Configuration options when creating the IGitVersionSelector extension control.
*/
export interface IGitVersionSelectorOptions {
    /** Hides the "Tags" tab */
    disableTags?: boolean;
    /** Hides the "Branches" tab */
    disableBranches?: boolean;
    /** Hides the "Mine" tab populated with branches created or favorited by the user, plus the default branch. Defaults false.  */
    disableMyBranches?: boolean;
    /** Allows returning the search string as the selected item even if it does not match any items in the list */
    allowUnmatchedSelection?: boolean;
    /** Callback for the selected item changed */
    onItemChanged?: (selectedItem: IGitVersionSelectorItem) => void;
}
/**
* A Git ref item (branch or tag, as indicated by the property used) in the version selector list.
* This is a subset of internal TFS.VersionControl.VersionSpecs properties that are the actual items.
* Arbitrary text may be specified as the branchName if allowUnmatchedSelection is true.
*/
export interface IGitVersionSelectorItem {
    /** Friendly branch name indicates the type as a Git branch. */
    branchName?: string;
    /** Friendly tag name indicates the type as a Git tag. */
    tagName?: string;
}
/**
* Interface of the Git Version Selector for choosing from a filtered list of available Git branches and tags in the specified repository.
*/
export interface IGitVersionSelector {
    /** Fetches repository by Id and updates the lists of branches and tags */
    setRepositoryId(repositoryId: string): IPromise<VCContracts.GitRepository>;
    /** Gets the selected item, including arbitrary text as the branchName if allowUnmatchedSelection is true. */
    getSelectedVersion(): IGitVersionSelectorItem;
    /** Sets the selected item, including arbitrary text as the branchName if allowUnmatchedSelection is true. */
    setSelectedVersion(item: IGitVersionSelectorItem): any;
}
/**
 * Module for creating an IGitVersionSelector extension control.
 */
export module GitVersionSelector {
    var contributionId: string;
    /**
     * Creates a new instance of an IGitVersionSelector for choosing from a filtered list of available Git branches and tags.
     * setRepositoryId() must be called to fully initialize and fetch the relevant branches and tags.
     */
    function create($container: JQuery, options?: IGitVersionSelectorOptions, webContext?: Contracts_Platform.WebContext): IPromise<IGitVersionSelector>;
}
}
declare module "TFS/VersionControl/GitRestClient" {
import Contracts = require("TFS/VersionControl/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected blobsApiVersion: string;
    protected branchStatsApiVersion: string;
    protected changesApiVersion: string;
    protected commitDiffsApiVersion: string;
    protected commitsApiVersion: string;
    protected commitsBatchApiVersion: string;
    protected itemsApiVersion: string;
    protected itemsBatchApiVersion: string;
    protected pullRequestReviewersApiVersion: string;
    protected pullRequestsApiVersion: string;
    protected pullRequestsApiVersion_a5d28130: string;
    protected pullRequestWorkItemsApiVersion: string;
    protected pushesApiVersion: string;
    protected refsApiVersion: string;
    protected repositoriesApiVersion: string;
    protected treesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @return IPromise<ArrayBuffer>
     */
    getTreeZip(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @return IPromise<Contracts.GitTreeRef>
     */
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): IPromise<Contracts.GitTreeRef>;
    /**
     * Updates the Git repository with the single populated change in the specified repository information.
     *
     * @param {Contracts.GitRepository} newRepositoryInfo
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    updateRepository(newRepositoryInfo: Contracts.GitRepository, repositoryId: string, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    getRepository(repositoryId: string, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * Retrieve git repositories.
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     * @param {boolean} includeAllUrls
     * @return IPromise<Contracts.GitRepository[]>
     */
    getRepositories(project?: string, includeLinks?: boolean, includeAllUrls?: boolean): IPromise<Contracts.GitRepository[]>;
    /**
     * Delete a git repository
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteRepository(repositoryId: string, project?: string): IPromise<void>;
    /**
     * Create a git repository
     *
     * @param {Contracts.GitRepository} gitRepositoryToCreate
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    createRepository(gitRepositoryToCreate: Contracts.GitRepository, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * Creates or updates refs with the given information
     *
     * @param {Contracts.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - The id of the project.
     * @return IPromise<Contracts.GitRefUpdateResult[]>
     */
    updateRefs(refUpdates: Contracts.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): IPromise<Contracts.GitRefUpdateResult[]>;
    /**
     * Queries the provided repository for its refs and returns them.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param {boolean} includeStatuses - [optional] Includes the first 1000 statuses of the commits the refs are pointing at as well. default is false.
     * @param {boolean} includeMyBranches - [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. Cannot be combined with the filter parameter.
     * @param {boolean} latestStatusesOnly
     * @param {boolean} peelTags - [optional] Annotated tags will populate the PeeledObjectId property. default is false.
     * @return IPromise<Contracts.GitRef[]>
     */
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean, includeStatuses?: boolean, includeMyBranches?: boolean, latestStatusesOnly?: boolean, peelTags?: boolean): IPromise<Contracts.GitRef[]>;
    /**
     * Retrieves pushes associated with the specified repository.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {Contracts.GitPushSearchCriteria} searchCriteria
     * @return IPromise<Contracts.GitPush[]>
     */
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: Contracts.GitPushSearchCriteria): IPromise<Contracts.GitPush[]>;
    /**
     * Retrieve a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates
     * @return IPromise<Contracts.GitPush>
     */
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): IPromise<Contracts.GitPush>;
    /**
     * Push changes to the repository.
     *
     * @param {Contracts.GitPush} push
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPush>
     */
    createPush(push: Contracts.GitPush, repositoryId: string, project?: string): IPromise<Contracts.GitPush>;
    /**
     * Retrieve a pull request work items
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AssociatedWorkItem[]>
     */
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.AssociatedWorkItem[]>;
    /**
     * Updates a pull request
     *
     * @param {Contracts.GitPullRequest} gitPullRequestToUpdate
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequest>
     */
    updatePullRequest(gitPullRequestToUpdate: Contracts.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequest>;
    /**
     * Query for pull requests
     *
     * @param {string} repositoryId
     * @param {Contracts.GitPullRequestSearchCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitPullRequest[]>
     */
    getPullRequests(repositoryId: string, searchCriteria: Contracts.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): IPromise<Contracts.GitPullRequest[]>;
    /**
     * Retrieve a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeCommits
     * @param {boolean} includeWorkItemRefs
     * @return IPromise<Contracts.GitPullRequest>
     */
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number, includeCommits?: boolean, includeWorkItemRefs?: boolean): IPromise<Contracts.GitPullRequest>;
    /**
     * Create a git pull request
     *
     * @param {Contracts.GitPullRequest} gitPullRequestToCreate
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {boolean} linkBranchWorkitems
     * @param {boolean} linkCommitWorkitems
     * @return IPromise<Contracts.GitPullRequest>
     */
    createPullRequest(gitPullRequestToCreate: Contracts.GitPullRequest, repositoryId: string, project?: string, linkBranchWorkitems?: boolean, linkCommitWorkitems?: boolean): IPromise<Contracts.GitPullRequest>;
    /**
     * Query pull requests by project
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitPullRequestSearchCriteria} searchCriteria
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitPullRequest[]>
     */
    getPullRequestsByProject(project: string, searchCriteria: Contracts.GitPullRequestSearchCriteria, maxCommentLength?: number, skip?: number, top?: number): IPromise<Contracts.GitPullRequest[]>;
    /**
     * Retrieve a pull request reviewers
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote[]>
     */
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.IdentityRefWithVote[]>;
    /**
     * Retrieve a reviewer from a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote>
     */
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<Contracts.IdentityRefWithVote>;
    /**
     * Adds reviewers to a git pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<void>;
    /**
     * Adds reviewers to a git pull request
     *
     * @param {VSS_Common_Contracts.IdentityRef[]} reviewers
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote[]>
     */
    createPullRequestReviewers(reviewers: VSS_Common_Contracts.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.IdentityRefWithVote[]>;
    /**
     * Adds a reviewer to a git pull request
     *
     * @param {Contracts.IdentityRefWithVote} reviewer
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote>
     */
    createPullRequestReviewer(reviewer: Contracts.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<Contracts.IdentityRefWithVote>;
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     *
     * @param {Contracts.GitItemRequestData} requestData
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitItem[][]>
     */
    getItemsBatch(requestData: Contracts.GitItemRequestData, repositoryId: string, project?: string): IPromise<Contracts.GitItem[][]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<ArrayBuffer>
     */
    getItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<string>
     */
    getItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<string>;
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {boolean} includeLinks
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<Contracts.GitItem[]>
     */
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitItem[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<ArrayBuffer>
     */
    getItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<Contracts.GitItem>
     */
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitItem>;
    /**
     * Retrieve git commits for a project
     *
     * @param {Contracts.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeStatuses
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getCommitsBatch(searchCriteria: Contracts.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number, includeStatuses?: boolean): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve a list of commits associated with a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of commits to return ("get the top x commits").
     * @param {number} skip - The number of commits to skip.
     * @param {boolean} includeLinks
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve git commits for a project
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {Contracts.GitQueryCommitsCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getCommits(repositoryId: string, searchCriteria: Contracts.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     * @return IPromise<Contracts.GitCommit>
     */
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): IPromise<Contracts.GitCommit>;
    /**
     * Get differences in committed items between two commits.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {boolean} diffCommonCommit
     * @param {number} top - Maximum number of changes to return
     * @param {number} skip - Number of changes to skip
     * @param {Contracts.GitBaseVersionDescriptor} baseVersionDescriptor
     * @param {Contracts.GitTargetVersionDescriptor} targetVersionDescriptor
     * @return IPromise<Contracts.GitCommitDiffs>
     */
    getCommitDiffs(repositoryId: string, project?: string, diffCommonCommit?: boolean, top?: number, skip?: number, baseVersionDescriptor?: Contracts.GitBaseVersionDescriptor, targetVersionDescriptor?: Contracts.GitTargetVersionDescriptor): IPromise<Contracts.GitCommitDiffs>;
    /**
     * Retrieve changes for a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of changes to return.
     * @param {number} skip - The number of changes to skip.
     * @return IPromise<Contracts.GitCommitChanges>
     */
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): IPromise<Contracts.GitCommitChanges>;
    /**
     * Retrieve statistics for multiple commits
     *
     * @param {Contracts.GitQueryBranchStatsCriteria} searchCriteria
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitBranchStats[]>
     */
    getBranchStatsBatch(searchCriteria: Contracts.GitQueryBranchStatsCriteria, repositoryId: string, project?: string): IPromise<Contracts.GitBranchStats[]>;
    /**
     * Retrieve statistics about all branches within a repository.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitVersionDescriptor} baseVersionDescriptor
     * @return IPromise<Contracts.GitBranchStats[]>
     */
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitBranchStats[]>;
    /**
     * Retrieve statistics about a single branch.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} name - Name of the branch
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitVersionDescriptor} baseVersionDescriptor
     * @return IPromise<Contracts.GitBranchStats>
     */
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitBranchStats>;
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @return IPromise<ArrayBuffer>
     */
    getBlobZip(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Gets one or more blobs in a zip file download.
     *
     * @param {string[]} blobIds
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} filename
     * @return IPromise<ArrayBuffer>
     */
    getBlobsZip(blobIds: string[], repositoryId: string, project?: string, filename?: string): IPromise<ArrayBuffer>;
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @return IPromise<ArrayBuffer>
     */
    getBlobContent(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @return IPromise<Contracts.GitBlobRef>
     */
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<Contracts.GitBlobRef>;
}
export class CommonMethods2_1To3_1 extends CommonMethods2To3_1 {
    protected pullRequestCommitsApiVersion: string;
    protected statusesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} commitId
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {number} top
     * @param {number} skip
     * @param {boolean} latestOnly
     * @return IPromise<Contracts.GitStatus[]>
     */
    getStatuses(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number, latestOnly?: boolean): IPromise<Contracts.GitStatus[]>;
    /**
     * @param {Contracts.GitStatus} gitCommitStatusToCreate
     * @param {string} commitId
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitStatus>
     */
    createCommitStatus(gitCommitStatusToCreate: Contracts.GitStatus, commitId: string, repositoryId: string, project?: string): IPromise<Contracts.GitStatus>;
    /**
     * Retrieve pull request's commits
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitCommitRef[]>;
}
export class CommonMethods2_2To3_1 extends CommonMethods2_1To3_1 {
    protected deletedRepositoriesApiVersion: string;
    protected suggestionsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Retrieve a set of suggestions (including a pull request suggestion).
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitSuggestion[]>
     */
    getSuggestions(repositoryId: string, project?: string): IPromise<Contracts.GitSuggestion[]>;
    /**
     * [Preview API] Retrieve deleted git repositories.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitDeletedRepository[]>
     */
    getDeletedRepositories(project: string): IPromise<Contracts.GitDeletedRepository[]>;
}
export class CommonMethods3To3_1 extends CommonMethods2_2To3_1 {
    protected cherryPicksApiVersion: string;
    protected filePathsApiVersion: string;
    protected importRequestsApiVersion: string;
    protected pullRequestCommitsApiVersion_e7ea0883: string;
    protected pullRequestConflictsApiVersion: string;
    protected pullRequestIterationChangesApiVersion: string;
    protected pullRequestIterationsApiVersion: string;
    protected pullRequestQueryApiVersion: string;
    protected pullRequestsApiVersion_01a46dea: string;
    protected pullRequestStatusesApiVersion: string;
    protected pullRequestStatusesApiVersion_75cf11c5: string;
    protected pullRequestThreadCommentsApiVersion: string;
    protected pullRequestThreadsApiVersion: string;
    protected refLockRequestApiVersion: string;
    protected refsFavoritesApiVersion: string;
    protected remoteRepositoryValidationsApiVersion: string;
    protected repositoryStatsApiVersion: string;
    protected revertsApiVersion: string;
    protected templatesApiVersion: string;
    protected treeDiffsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API] Retrieve all available templates of specified 'type'. If not specified, entire list is returned
     *
     * @param {string} project - Project ID or project name
     * @param {string} type - searches for templates with this type
     * @return IPromise<Contracts.GitTemplate[]>
     */
    getTemplateList(project: string, type?: string): IPromise<Contracts.GitTemplate[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} refName
     * @return IPromise<Contracts.GitRevert>
     */
    getRevertForRefName(project: string, repositoryId: string, refName: string): IPromise<Contracts.GitRevert>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} revertId
     * @param {string} repositoryId
     * @return IPromise<Contracts.GitRevert>
     */
    getRevert(project: string, revertId: number, repositoryId: string): IPromise<Contracts.GitRevert>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.GitAsyncRefOperationParameters} revertToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @return IPromise<Contracts.GitRevert>
     */
    createRevert(revertToCreate: Contracts.GitAsyncRefOperationParameters, project: string, repositoryId: string): IPromise<Contracts.GitRevert>;
    /**
     * @exemptedapi
     * [Preview API] Retrieves statistics of a repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - Friendly name or guid of repository.
     * @return IPromise<Contracts.GitRepositoryStats>
     */
    getStats(project: string, repositoryId: string): IPromise<Contracts.GitRepositoryStats>;
    /**
     * @exemptedapi
     * [Preview API] Validates a remote repository. Returns 404 if remote repository is not reachable
     *
     * @param {Contracts.RemoteRepositoryValidation} remoteRepository - The remote repository to validate.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.RemoteRepositoryValidation>
     */
    validateRemoteRepository(remoteRepository: Contracts.RemoteRepositoryValidation, project: string): IPromise<Contracts.RemoteRepositoryValidation>;
    /**
     * @exemptedapi
     * [Preview API] Gets the refs favorites for a repo and an identity.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The id of the repository.
     * @param {string} identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
     * @return IPromise<Contracts.GitRefFavorite[]>
     */
    getRefFavorites(project: string, repositoryId?: string, identityId?: string): IPromise<Contracts.GitRefFavorite[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId
     * @return IPromise<Contracts.GitRefFavorite>
     */
    getRefFavorite(project: string, favoriteId: number): IPromise<Contracts.GitRefFavorite>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId
     * @return IPromise<void>
     */
    deleteRefFavorite(project: string, favoriteId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Creates a ref favorite
     *
     * @param {Contracts.GitRefFavorite} favorite
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRefFavorite>
     */
    createFavorite(favorite: Contracts.GitRefFavorite, project: string): IPromise<Contracts.GitRefFavorite>;
    /**
     * Update a pull request review comment thread
     *
     * @param {Contracts.GitPullRequestCommentThread} commentThread
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestCommentThread>
     */
    updateThread(commentThread: Contracts.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project?: string): IPromise<Contracts.GitPullRequestCommentThread>;
    /**
     * Get all pull request comment threads.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} iteration
     * @param {number} baseIteration
     * @return IPromise<Contracts.GitPullRequestCommentThread[]>
     */
    getThreads(repositoryId: string, pullRequestId: number, project?: string, iteration?: number, baseIteration?: number): IPromise<Contracts.GitPullRequestCommentThread[]>;
    /**
     * Get a pull request comment thread by id for a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     * @param {number} iteration
     * @param {number} baseIteration
     * @return IPromise<Contracts.GitPullRequestCommentThread>
     */
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project?: string, iteration?: number, baseIteration?: number): IPromise<Contracts.GitPullRequestCommentThread>;
    /**
     * Create a pull request review comment thread
     *
     * @param {Contracts.GitPullRequestCommentThread} commentThread
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestCommentThread>
     */
    createThread(commentThread: Contracts.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequestCommentThread>;
    /**
     * Update a pull request review comment thread
     *
     * @param {Contracts.Comment} comment
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {number} commentId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment>
     */
    updateComment(comment: Contracts.Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<Contracts.Comment>;
    /**
     * Get all pull request comments in a thread.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment[]>
     */
    getComments(repositoryId: string, pullRequestId: number, threadId: number, project?: string): IPromise<Contracts.Comment[]>;
    /**
     * Get a pull request comment by id for a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {number} commentId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment>
     */
    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<Contracts.Comment>;
    /**
     * Delete a pull request comment by id for a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {number} commentId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<void>;
    /**
     * Create a pull request review comment
     *
     * @param {Contracts.Comment} comment
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment>
     */
    createComment(comment: Contracts.Comment, repositoryId: string, pullRequestId: number, threadId: number, project?: string): IPromise<Contracts.Comment>;
    /**
     * @exemptedapi
     * [Preview API] Get all the statuses associated with a pull request.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus[]>
     */
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequestStatus[]>;
    /**
     * @exemptedapi
     * [Preview API] Get the specific pull request status.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} statusId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * @exemptedapi
     * [Preview API] Create a pull request status
     *
     * @param {Contracts.GitPullRequestStatus} status
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    createPullRequestStatus(status: Contracts.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * @exemptedapi
     * [Preview API] Get all the statuses associated with a pull request iteration.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus[]>
     */
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitPullRequestStatus[]>;
    /**
     * @exemptedapi
     * [Preview API] Get the specific pull request iteration status.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {number} statusId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * @exemptedapi
     * [Preview API] Create a pull request iteration status
     *
     * @param {Contracts.GitPullRequestStatus} status
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    createPullRequestIterationStatus(status: Contracts.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * Get a pull request using it's ID
     *
     * @param {number} pullRequestId - the Id of the pull request
     * @return IPromise<Contracts.GitPullRequest>
     */
    getPullRequestById(pullRequestId: number): IPromise<Contracts.GitPullRequest>;
    /**
     * Query for pull requests
     *
     * @param {Contracts.GitPullRequestQuery} queries
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestQuery>
     */
    getPullRequestQuery(queries: Contracts.GitPullRequestQuery, repositoryId: string, project?: string): IPromise<Contracts.GitPullRequestQuery>;
    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {boolean} includeCommits
     * @return IPromise<Contracts.GitPullRequestIteration[]>
     */
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project?: string, includeCommits?: boolean): IPromise<Contracts.GitPullRequestIteration[]>;
    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestIteration>
     */
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitPullRequestIteration>;
    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     * @param {number} top
     * @param {number} skip
     * @param {number} compareTo
     * @return IPromise<Contracts.GitPullRequestIterationChanges>
     */
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number, compareTo?: number): IPromise<Contracts.GitPullRequestIterationChanges>;
    /**
     * @exemptedapi
     * [Preview API] Update merge conflict resolution
     *
     * @param {Contracts.GitConflict} conflict
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitConflict>
     */
    updatePullRequestConflict(conflict: Contracts.GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project?: string): IPromise<Contracts.GitConflict>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve all conflicts for a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeObsolete
     * @return IPromise<Contracts.GitConflict[]>
     */
    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project?: string, skip?: number, top?: number, includeObsolete?: boolean): IPromise<Contracts.GitConflict[]>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve one conflict for a pull request by ID
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitConflict>
     */
    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project?: string): IPromise<Contracts.GitConflict>;
    /**
     * Get the commits for an iteration.
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId - Iteration to retrieve commits for
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitCommitRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Update an import request
     *
     * @param {Contracts.GitImportRequest} importRequestToUpdate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {number} importRequestId
     * @return IPromise<Contracts.GitImportRequest>
     */
    updateImportRequest(importRequestToUpdate: Contracts.GitImportRequest, project: string, repositoryId: string, importRequestId: number): IPromise<Contracts.GitImportRequest>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve import requests for a repository
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {boolean} includeAbandoned
     * @return IPromise<Contracts.GitImportRequest[]>
     */
    queryImportRequests(project: string, repositoryId: string, includeAbandoned?: boolean): IPromise<Contracts.GitImportRequest[]>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve a particular import request
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {number} importRequestId
     * @return IPromise<Contracts.GitImportRequest>
     */
    getImportRequest(project: string, repositoryId: string, importRequestId: number): IPromise<Contracts.GitImportRequest>;
    /**
     * @exemptedapi
     * [Preview API] Create an import request
     *
     * @param {Contracts.GitImportRequest} importRequest
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {boolean} validateParameters
     * @return IPromise<Contracts.GitImportRequest>
     */
    createImportRequest(importRequest: Contracts.GitImportRequest, project: string, repositoryId: string, validateParameters?: boolean): IPromise<Contracts.GitImportRequest>;
    /**
     * @exemptedapi
     * [Preview API] Get file paths in a repository branch
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - repository identifier
     * @param {string} scopePath - path to search under
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - version, version type and options
     * @return IPromise<Contracts.GitFilePathsCollection>
     */
    getFilePaths(project: string, repositoryId: string, scopePath?: string, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitFilePathsCollection>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} refName
     * @return IPromise<Contracts.GitCherryPick>
     */
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): IPromise<Contracts.GitCherryPick>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} cherryPickId
     * @param {string} repositoryId
     * @return IPromise<Contracts.GitCherryPick>
     */
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): IPromise<Contracts.GitCherryPick>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.GitAsyncRefOperationParameters} cherryPickToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @return IPromise<Contracts.GitCherryPick>
     */
    createCherryPick(cherryPickToCreate: Contracts.GitAsyncRefOperationParameters, project: string, repositoryId: string): IPromise<Contracts.GitCherryPick>;
}
/**
 * @exemptedapi
 */
export class GitHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Create a new attachment
     *
     * @param {any} content - Content to upload
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Attachment>
     */
    createAttachment(content: any, fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.Attachment>;
    /**
     * [Preview API]
     *
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Attachment[]>
     */
    getAttachments(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.Attachment[]>;
    /**
     * [Preview API]
     *
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ShareNotificationContext} userMessage
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    sharePullRequest(userMessage: Contracts.ShareNotificationContext, repositoryId: string, pullRequestId: number, project?: string): IPromise<void>;
}
/**
 * @exemptedapi
 */
export class GitHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2_3 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2_2 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class GitHttpClient extends GitHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return GitHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): GitHttpClient3;
}
declare module "TFS/VersionControl/Services" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
/**
* Host service for common code actions
*/
export interface IVersionControlActionService {
    /** Launches create branch dialog
    * @param workItemIds The work item ids to link to the newly created branch
    * @param project The Project Name to open the dialog for
    * @param projectId The Project ID/Guid to open the dialog for
    */
    beginLaunchCreateBranchDialog(workItemIds: number[], project?: string, projectId?: string): IPromise<void>;
    /** Features required for actions, the actions will not work as desired when users do not have license for the listed features. */
    requiredFeaturesForActions?: string[];
}
/**
* Host service for version control actions
*/
export module VersionControlActionService {
    var contributionId: string;
    var fullyQualifiedContributionId: string;
    /** Get an instance of the code action service
    * @param webContext Optional web context to scope the service to
    */
    function getService(webContext?: Contracts_Platform.WebContext): IPromise<IVersionControlActionService>;
}
}
declare module "TFS/VersionControl/TfvcRestClient" {
import TFS_VersionControl_Contracts = require("TFS/VersionControl/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected branchesApiVersion: string;
    protected changesetChangesApiVersion: string;
    protected changesetsApiVersion: string;
    protected changesetsBatchApiVersion: string;
    protected changesetWorkItemsApiVersion: string;
    protected itemBatchApiVersion: string;
    protected itemsApiVersion: string;
    protected labelItemsApiVersion: string;
    protected labelsApiVersion: string;
    protected shelvesetChangesApiVersion: string;
    protected shelvesetsApiVersion: string;
    protected shelvesetWorkItemsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get work items associated with a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @return IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>
     */
    getShelvesetWorkItems(shelvesetId: string): IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>;
    /**
     * Return a collection of shallow shelveset references.
     *
     * @param {TFS_VersionControl_Contracts.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
     * @param {number} top - Max number of shelvesets to return
     * @param {number} skip - Number of shelvesets to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcShelvesetRef[]>
     */
    getShelvesets(requestData?: TFS_VersionControl_Contracts.TfvcShelvesetRequestData, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcShelvesetRef[]>;
    /**
     * Get a single deep shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {TFS_VersionControl_Contracts.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
     * @return IPromise<TFS_VersionControl_Contracts.TfvcShelveset>
     */
    getShelveset(shelvesetId: string, requestData?: TFS_VersionControl_Contracts.TfvcShelvesetRequestData): IPromise<TFS_VersionControl_Contracts.TfvcShelveset>;
    /**
     * Get changes included in a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {number} top - Max number of changes to return
     * @param {number} skip - Number of changes to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChange[]>
     */
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcChange[]>;
    /**
     * Get a collection of shallow label references.
     *
     * @param {TFS_VersionControl_Contracts.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
     * @param {string} project - Project ID or project name
     * @param {number} top - Max number of labels to return
     * @param {number} skip - Number of labels to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcLabelRef[]>
     */
    getLabels(requestData: TFS_VersionControl_Contracts.TfvcLabelRequestData, project?: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcLabelRef[]>;
    /**
     * Get a single deep label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {TFS_VersionControl_Contracts.TfvcLabelRequestData} requestData - maxItemCount
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcLabel>
     */
    getLabel(labelId: string, requestData: TFS_VersionControl_Contracts.TfvcLabelRequestData, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcLabel>;
    /**
     * Get items under a label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {number} top - Max number of items to return
     * @param {number} skip - Number of items to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[]>
     */
    getLabelItems(labelId: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcItem[]>;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<ArrayBuffer>
     */
    getItemZip(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<string>
     */
    getItemText(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<string>;
    /**
     * Get a list of Tfvc items
     *
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeLinks
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[]>
     */
    getItems(project?: string, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<TFS_VersionControl_Contracts.TfvcItem[]>;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<ArrayBuffer>
     */
    getItemContent(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem>
     */
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<TFS_VersionControl_Contracts.TfvcItem>;
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     *
     * @param {TFS_VersionControl_Contracts.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getItemsBatchZip(itemRequestData: TFS_VersionControl_Contracts.TfvcItemRequestData, project?: string): IPromise<ArrayBuffer>;
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     *
     * @param {TFS_VersionControl_Contracts.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[][]>
     */
    getItemsBatch(itemRequestData: TFS_VersionControl_Contracts.TfvcItemRequestData, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcItem[][]>;
    /**
     * @param {number} id
     * @return IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>
     */
    getChangesetWorkItems(id?: number): IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>;
    /**
     * @param {TFS_VersionControl_Contracts.TfvcChangesetsRequestData} changesetsRequestData
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getBatchedChangesets(changesetsRequestData: TFS_VersionControl_Contracts.TfvcChangesetsRequestData): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * Retrieve Tfvc changesets
     *
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxCommentLength?: number, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount
     * @param {boolean} includeDetails
     * @param {boolean} includeWorkItems
     * @param {number} maxCommentLength
     * @param {boolean} includeSourceRename
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * @param {TFS_VersionControl_Contracts.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>
     */
    createChangeset(changeset: TFS_VersionControl_Contracts.TfvcChangeset, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>;
    /**
     * Retrieve Tfvc changes for a given changeset
     *
     * @param {number} id
     * @param {number} skip
     * @param {number} top
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChange[]>
     */
    getChangesetChanges(id?: number, skip?: number, top?: number): IPromise<TFS_VersionControl_Contracts.TfvcChange[]>;
    /**
     * Get branch hierarchies below the specified scopePath
     *
     * @param {string} scopePath
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranchRef[]>
     */
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranchRef[]>;
    /**
     * Get a collection of branch roots -- first-level children, branches with no parents
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranch[]>
     */
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranch[]>;
    /**
     * Get a single branch hierarchy at the given path with parents or children (if specified)
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranch>
     */
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranch>;
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient3_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * [Obsolete - Use the Projects API instead]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * [Obsolete - Use the Projects API instead]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * [Obsolete - Use the Projects API instead]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
}
export class TfvcHttpClient extends TfvcHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TfvcHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TfvcHttpClient3;
}
declare module "TFS/VersionControl/UIContracts" {
import VCContracts = require("TFS/VersionControl/Contracts");
export interface ISourceItem extends VCContracts.ItemModel {
    sourceProvider: string;
    item: VCContracts.GitItem | VCContracts.TfvcItem;
}
export interface SourceItemContext {
    item: ISourceItem;
    version: string;
    gitRepository?: VCContracts.GitRepository;
}
export interface GitBranchContext {
    repository: VCContracts.GitRepository;
    ref: VCContracts.GitRef;
    view: {
        refresh: () => void;
    };
}
export interface GitBranchDiffContext {
    gitBranchDiff: VCContracts.GitCommitDiffs;
    repository: VCContracts.GitRepository;
    view: {
        refresh: () => void;
    };
}
export interface ChangeListSourceItemContext {
    change: VCContracts.GitChange | VCContracts.TfvcChange;
    changeList: VCContracts.ChangeList<VCContracts.GitItem> | VCContracts.ChangeList<VCContracts.TfvcItem>;
}
}
declare module "TFS/WorkItemTracking/BatchRestClient" {
import VSS_WebApi = require("VSS/WebApi/RestClient");
import VSS_WebApi_Contracts = require("VSS/WebApi/Contracts");
/**
* Interface for the Json request message
*/
export interface JsonHttpRequest {
    /**
    * HTTP verb.
    */
    method: string;
    /**
    * Uri of the resource to be invoked.
    */
    uri: string;
    /**
    * Dictionary of the headers to passed along.
    */
    headers: IDictionaryStringTo<string>;
    /**
    * Request body.
    */
    body?: any;
}
/**
* Interface for the Json response message
*/
export interface JsonHttpResponse {
    /**
    * Response code.
    */
    code: number;
    /**
    * Dictionary of the headers to passed along.
    */
    headers?: IDictionaryStringTo<string>;
    /**
    * Request body.
    */
    body?: any;
}
/**
* Interface for the Json response message
*/
export interface JsonHttpBatchResponse {
    /**
    * The number of response objects batched together.
    */
    count: number;
    /**
    * Collection of the responses.
    */
    value: JsonHttpResponse[];
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpBatchClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * [Preview API]
     *
     * @param documents
     * @param project
     * @param type
     * @return IPromise<JsonHttpBatchResponse>
     */
    createWorkItemsBatch(documents: VSS_WebApi_Contracts.JsonPatchDocument[], project: string, type: string): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param updateDocuments
     * @return IPromise<JsonHttpBatchResponse>
     */
    updateWorkItemsBatch(updateDocuments: [number, VSS_WebApi_Contracts.JsonPatchDocument][]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {number[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    destroyWorkItemsBatch(ids: number[]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {number[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    restoreWorkItemsBatch(ids: number[]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {number[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    deleteWorkItemsBatch(ids: number[]): IPromise<JsonHttpBatchResponse>;
    private _createBatchRequests(ids, httpMethod, resource, body?);
    private _createBatchRequest(id, httpMethod, resource, body?);
    private _beginBatchRequest(requests);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpBatchClient
 */
export function getClient(): WorkItemTrackingHttpBatchClient;
}
declare module "TFS/WorkItemTracking/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AccountMyWorkResult {
    /**
     * True, when length of WorkItemDetails is same as the limit
     */
    querySizeLimitExceeded: boolean;
    /**
     * WorkItem Details
     */
    workItemDetails: AccountWorkWorkItemModel[];
}
/**
 * Represents Work Item Recent Activity
 */
export interface AccountRecentActivityWorkItemModel {
    /**
     * Date of the last Activity by the user
     */
    activityDate: Date;
    /**
     * Type of the activity
     */
    activityType: WorkItemRecentActivityType;
    /**
     * Assigned To
     */
    assignedTo: string;
    /**
     * Last changed date of the work item
     */
    changedDate: Date;
    /**
     * Work Item Id
     */
    id: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     */
    identityId: string;
    /**
     * State of the work item
     */
    state: string;
    /**
     * Team project the work item belongs to
     */
    teamProject: string;
    /**
     * Title of the work item
     */
    title: string;
    /**
     * Type of Work Item
     */
    workItemType: string;
}
export interface AccountWorkWorkItemModel {
    assignedTo: string;
    changedDate: Date;
    id: number;
    state: string;
    teamProject: string;
    title: string;
    workItemType: string;
}
export interface AttachmentReference {
    id: string;
    url: string;
}
export enum CommentSortOrder {
    Asc = 1,
    Desc = 2,
}
export interface FieldDependentRule extends WorkItemTrackingResource {
    dependentFields: WorkItemFieldReference[];
}
export interface FieldsToEvaluate {
    fields: string[];
    fieldUpdates: {
        [key: string]: any;
    };
    fieldValues: {
        [key: string]: any;
    };
    rulesFrom: string[];
}
export enum FieldType {
    String = 0,
    Integer = 1,
    DateTime = 2,
    PlainText = 3,
    Html = 4,
    TreePath = 5,
    History = 6,
    Double = 7,
    Guid = 8,
    Boolean = 9,
}
export enum GetFieldsExpand {
    None = 0,
    ExtensionFields = 1,
}
export interface IdentityReference {
    id: string;
    name: string;
    url: string;
}
export interface Link {
    attributes: {
        [key: string]: any;
    };
    rel: string;
    url: string;
}
export enum LinkChangeType {
    Create = 0,
    Remove = 1,
}
export enum LinkQueryMode {
    WorkItems = 0,
    LinksOneHopMustContain = 1,
    LinksOneHopMayContain = 2,
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}
export enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}
/**
 * Project work item type state colors
 */
export interface ProjectWorkItemStateColors {
    /**
     * Project name
     */
    projectName: string;
    /**
     * State colors for all work item type in a project
     */
    workItemTypeStateColors: WorkItemTypeStateColors[];
}
export enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}
export interface ProvisioningResult {
    provisioningImportEvents: string[];
}
export enum QueryExpand {
    None = 0,
    Wiql = 1,
    Clauses = 2,
    All = 3,
}
export interface QueryHierarchyItem extends WorkItemTrackingResource {
    children: QueryHierarchyItem[];
    clauses: WorkItemQueryClause;
    columns: WorkItemFieldReference[];
    createdBy: IdentityReference;
    createdDate: Date;
    filterOptions: LinkQueryMode;
    hasChildren: boolean;
    id: string;
    isDeleted: boolean;
    isFolder: boolean;
    isInvalidSyntax: boolean;
    isPublic: boolean;
    lastModifiedBy: IdentityReference;
    lastModifiedDate: Date;
    linkClauses: WorkItemQueryClause;
    name: string;
    path: string;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    sourceClauses: WorkItemQueryClause;
    targetClauses: WorkItemQueryClause;
    wiql: string;
}
export enum QueryOption {
    Doing = 1,
    Done = 2,
    Followed = 3,
}
export enum QueryResultType {
    WorkItem = 1,
    WorkItemLink = 2,
}
export enum QueryType {
    Flat = 1,
    Tree = 2,
    OneHop = 3,
}
export enum ReportingRevisionsExpand {
    None = 0,
    Fields = 1,
}
export interface ReportingWorkItemLink {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changedOperation: LinkChangeType;
    comment: string;
    isActive: boolean;
    linkType: string;
    rel: string;
    sourceId: number;
    targetId: number;
}
export interface ReportingWorkItemLinksBatch extends StreamedBatch<ReportingWorkItemLink> {
}
export interface ReportingWorkItemRevisionsBatch extends StreamedBatch<WorkItem> {
}
export interface ReportingWorkItemRevisionsFilter {
    /**
     * A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     */
    fields: string[];
    /**
     * Include deleted work item in the result.
     */
    includeDeleted: boolean;
    /**
     * Return an identity reference instead of a string value for identity fields.
     */
    includeIdentityRef: boolean;
    /**
     * Include only the latest version of a work item, skipping over all previous revisions of the work item.
     */
    includeLatestOnly: boolean;
    /**
     * Include tag reference instead of string value for System.Tags field
     */
    includeTagRef: boolean;
    /**
     * A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     */
    types: string[];
}
export interface StreamedBatch<T> {
    continuationToken: string;
    isLastBatch: boolean;
    nextLink: string;
    values: T[];
}
export enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}
export enum TreeNodeStructureType {
    Area = 0,
    Iteration = 1,
}
export enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}
export interface Wiql {
    query: string;
}
export interface WorkItem extends WorkItemTrackingResource {
    fields: {
        [key: string]: any;
    };
    id: number;
    relations: WorkItemRelation[];
    rev: number;
}
export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    attributes: {
        [key: string]: any;
    };
    children: WorkItemClassificationNode[];
    id: number;
    identifier: string;
    name: string;
    structureType: TreeNodeStructureType;
}
export interface WorkItemComment extends WorkItemTrackingResource {
    revisedBy: IdentityReference;
    revisedDate: Date;
    revision: number;
    text: string;
}
export interface WorkItemComments {
    comments: WorkItemComment[];
    count: number;
    fromRevisionCount: number;
    totalCount: number;
}
export interface WorkItemDelete extends WorkItemDeleteReference {
    resource: WorkItem;
}
export interface WorkItemDeleteReference {
    code: number;
    deletedBy: string;
    deletedDate: string;
    id: number;
    message: string;
    name: string;
    project: string;
    type: string;
    url: string;
}
export interface WorkItemDeleteUpdate {
    isDeleted: boolean;
}
export enum WorkItemErrorPolicy {
    Fail = 1,
    Omit = 2,
}
export enum WorkItemExpand {
    None = 0,
    Relations = 1,
    Fields = 2,
    Links = 3,
    All = 4,
}
export interface WorkItemField extends WorkItemTrackingResource {
    name: string;
    readOnly: boolean;
    referenceName: string;
    supportedOperations: WorkItemFieldOperation[];
    type: FieldType;
}
export interface WorkItemFieldOperation {
    name: string;
    referenceName: string;
}
export interface WorkItemFieldReference {
    name: string;
    referenceName: string;
    url: string;
}
export interface WorkItemFieldUpdate {
    newValue: any;
    oldValue: any;
}
export interface WorkItemHistory extends WorkItemTrackingResource {
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    value: string;
}
export interface WorkItemLink {
    rel: string;
    source: WorkItemReference;
    target: WorkItemReference;
}
export interface WorkItemQueryClause {
    clauses: WorkItemQueryClause[];
    field: WorkItemFieldReference;
    fieldValue: WorkItemFieldReference;
    isFieldValue: boolean;
    logicalOperator: LogicalOperation;
    operator: WorkItemFieldOperation;
    value: string;
}
export interface WorkItemQueryResult {
    asOf: Date;
    columns: WorkItemFieldReference[];
    queryResultType: QueryResultType;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    workItemRelations: WorkItemLink[];
    workItems: WorkItemReference[];
}
export interface WorkItemQuerySortColumn {
    descending: boolean;
    field: WorkItemFieldReference;
}
export enum WorkItemRecentActivityType {
    Visited = 0,
    Edited = 1,
    Deleted = 2,
    Restored = 3,
}
export interface WorkItemReference {
    id: number;
    url: string;
}
export interface WorkItemRelation extends Link {
}
export interface WorkItemRelationType extends WorkItemTrackingReference {
    attributes: {
        [key: string]: any;
    };
}
export interface WorkItemRelationUpdates {
    added: WorkItemRelation[];
    removed: WorkItemRelation[];
    updated: WorkItemRelation[];
}
/**
 * Work item type state name and color pair
 */
export interface WorkItemStateColor {
    /**
     * Color value
     */
    color: string;
    /**
     * Work item type state name
     */
    name: string;
}
export interface WorkItemStateTransition {
    to: string;
}
export interface WorkItemTemplate extends WorkItemTemplateReference {
    fields: {
        [key: string]: string;
    };
}
export interface WorkItemTemplateReference extends WorkItemTrackingResource {
    description: string;
    id: string;
    name: string;
    workItemTypeName: string;
}
export interface WorkItemTrackingReference extends WorkItemTrackingResource {
    name: string;
    referenceName: string;
}
export interface WorkItemTrackingResource extends WorkItemTrackingResourceReference {
    _links: any;
}
export interface WorkItemTrackingResourceReference {
    url: string;
}
export interface WorkItemType extends WorkItemTrackingResource {
    color: string;
    description: string;
    fieldInstances: WorkItemTypeFieldInstance[];
    fields: WorkItemTypeFieldInstance[];
    name: string;
    transitions: {
        [key: string]: WorkItemStateTransition[];
    };
    xmlForm: string;
}
export interface WorkItemTypeCategory extends WorkItemTrackingResource {
    defaultWorkItemType: WorkItemTypeReference;
    name: string;
    referenceName: string;
    workItemTypes: WorkItemTypeReference[];
}
export interface WorkItemTypeColor {
    primaryColor: string;
    secondaryColor: string;
    workItemTypeName: string;
}
export interface WorkItemTypeFieldInstance extends WorkItemFieldReference {
    alwaysRequired: boolean;
    field: WorkItemFieldReference;
    helpText: string;
}
export interface WorkItemTypeReference extends WorkItemTrackingResourceReference {
    name: string;
}
/**
 * State colors for a work item type
 */
export interface WorkItemTypeStateColors {
    /**
     * Work item type state colors
     */
    stateColors: WorkItemStateColor[];
    /**
     * Work item type name
     */
    workItemTypeName: string;
}
export interface WorkItemTypeTemplate {
    template: string;
}
export interface WorkItemTypeTemplateUpdateModel {
    actionType: ProvisioningActionType;
    methodology: string;
    template: string;
    templateType: TemplateType;
}
export interface WorkItemUpdate extends WorkItemTrackingResourceReference {
    fields: {
        [key: string]: WorkItemFieldUpdate;
    };
    id: number;
    relations: WorkItemRelationUpdates;
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    workItemId: number;
}
export var TypeInfo: {
    AccountMyWorkResult: any;
    AccountRecentActivityWorkItemModel: any;
    AccountWorkWorkItemModel: any;
    CommentSortOrder: {
        enumValues: {
            "asc": number;
            "desc": number;
        };
    };
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
        };
    };
    GetFieldsExpand: {
        enumValues: {
            "none": number;
            "extensionFields": number;
        };
    };
    LinkChangeType: {
        enumValues: {
            "create": number;
            "remove": number;
        };
    };
    LinkQueryMode: {
        enumValues: {
            "workItems": number;
            "linksOneHopMustContain": number;
            "linksOneHopMayContain": number;
            "linksOneHopDoesNotContain": number;
            "linksRecursiveMustContain": number;
            "linksRecursiveMayContain": number;
            "linksRecursiveDoesNotContain": number;
        };
    };
    LogicalOperation: {
        enumValues: {
            "nONE": number;
            "aND": number;
            "oR": number;
        };
    };
    ProvisioningActionType: {
        enumValues: {
            "import": number;
            "validate": number;
        };
    };
    QueryExpand: {
        enumValues: {
            "none": number;
            "wiql": number;
            "clauses": number;
            "all": number;
        };
    };
    QueryHierarchyItem: any;
    QueryOption: {
        enumValues: {
            "doing": number;
            "done": number;
            "followed": number;
        };
    };
    QueryResultType: {
        enumValues: {
            "workItem": number;
            "workItemLink": number;
        };
    };
    QueryType: {
        enumValues: {
            "flat": number;
            "tree": number;
            "oneHop": number;
        };
    };
    ReportingRevisionsExpand: {
        enumValues: {
            "none": number;
            "fields": number;
        };
    };
    ReportingWorkItemLink: any;
    TemplateType: {
        enumValues: {
            "workItemType": number;
            "globalWorkflow": number;
        };
    };
    TreeNodeStructureType: {
        enumValues: {
            "area": number;
            "iteration": number;
        };
    };
    TreeStructureGroup: {
        enumValues: {
            "areas": number;
            "iterations": number;
        };
    };
    WorkItemClassificationNode: any;
    WorkItemComment: any;
    WorkItemComments: any;
    WorkItemErrorPolicy: {
        enumValues: {
            "fail": number;
            "omit": number;
        };
    };
    WorkItemExpand: {
        enumValues: {
            "none": number;
            "relations": number;
            "fields": number;
            "links": number;
            "all": number;
        };
    };
    WorkItemField: any;
    WorkItemHistory: any;
    WorkItemQueryClause: any;
    WorkItemQueryResult: any;
    WorkItemRecentActivityType: {
        enumValues: {
            "visited": number;
            "edited": number;
            "deleted": number;
            "restored": number;
        };
    };
    WorkItemTypeTemplateUpdateModel: any;
    WorkItemUpdate: any;
};
}
declare module "TFS/WorkItemTracking/ExtensionContracts" {
/**
* Interface defining the arguments for notifications sent by the ActiveWorkItemService
*/
export interface IWorkItemChangedArgs {
    /**
    * Id of the work item.
    */
    id: number;
}
/**
* Interface defining the arguments for the 'onLoaded' notification sent by the ActiveWorkItemService
*/
export interface IWorkItemLoadedArgs extends IWorkItemChangedArgs {
    /**
    * 'true' if the work item is a 'new', unsaved work item, 'false' otherwise.
    */
    isNew: boolean;
}
/**
* Interface defining the arguments for the 'onFieldChanged' notification sent by the ActiveWorkItemService
*/
export interface IWorkItemFieldChangedArgs extends IWorkItemChangedArgs {
    /**
    * Set of fields that have been changed.  'key' is the field reference name.
    */
    changedFields: {
        [key: string]: any;
    };
}
/**
* Interface defining notifications provided by the ActiveWorkItemService
*/
export interface IWorkItemNotificationListener {
    /**
    * Called when an extension is loaded
    *
    * @param workItemLoadedArgs Information about the work item that was loaded.
    */
    onLoaded(workItemLoadedArgs: IWorkItemLoadedArgs): void;
    /**
    * Called when a field is modified
    *
    * @param fieldChangedArgs Information about the work item that was modified and the fields that were changed.
    */
    onFieldChanged(fieldChangedArgs: IWorkItemFieldChangedArgs): void;
    /**
    * Called when a work item is saved
    *
    * @param savedEventArgs Information about the work item that was saved.
    */
    onSaved(savedEventArgs: IWorkItemChangedArgs): void;
    /**
    * Called when a work item is refreshed
    *
    * @param refreshEventArgs Information about the work item that was refreshed.
    */
    onRefreshed(refreshEventArgs: IWorkItemChangedArgs): void;
    /**
    * Called when a work item is reset (undo back to unchanged state)
    *
    * @param undoEventArgs Information about the work item that was reset.
    */
    onReset(undoEventArgs: IWorkItemChangedArgs): void;
    /**
    * Called when a work item is unloaded
    *
    * @param unloadedEventArgs Information about the work item that was saved.
    */
    onUnloaded(unloadedEventArgs: IWorkItemChangedArgs): void;
}
}
declare module "TFS/WorkItemTracking/ProcessContracts" {
export interface FieldModel {
    description: string;
    id: string;
    name: string;
    type: FieldType;
    url: string;
}
export enum FieldType {
    String = 1,
    Integer = 2,
    DateTime = 3,
    PlainText = 5,
    Html = 7,
    TreePath = 8,
    History = 9,
    Double = 10,
    Guid = 11,
    Boolean = 12,
    Identity = 13,
    PicklistInteger = 14,
    PicklistString = 15,
    PicklistDouble = 16,
}
export enum GetBehaviorsExpand {
    None = 0,
    Fields = 1,
}
export interface WorkItemBehavior {
    abstract: boolean;
    color: string;
    description: string;
    fields: WorkItemBehaviorField[];
    id: string;
    inherits: WorkItemBehaviorReference;
    name: string;
    overriden: boolean;
    rank: number;
    url: string;
}
export interface WorkItemBehaviorField {
    behaviorFieldId: string;
    id: string;
    url: string;
}
export interface WorkItemBehaviorReference {
    id: string;
    url: string;
}
export var TypeInfo: {
    FieldModel: any;
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
            "identity": number;
            "picklistInteger": number;
            "picklistString": number;
            "picklistDouble": number;
        };
    };
    GetBehaviorsExpand: {
        enumValues: {
            "none": number;
            "fields": number;
        };
    };
};
}
declare module "TFS/WorkItemTracking/ProcessDefinitionsContracts" {
/**
 * Represent a control in the form.
 */
export interface Control {
    /**
     * Contribution for the control.
     */
    contribution: WitContribution;
    /**
     * Type of the control.
     */
    controlType: string;
    /**
     * Height of the control, for html controls.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution or not.
     */
    isContribution: boolean;
    /**
     * Label for the field
     */
    label: string;
    /**
     * Inner text of the control.
     */
    metadata: string;
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the control is readonly.
     */
    readOnly: boolean;
    /**
     * A value indicating if the control should be hidden or not.
     */
    visible: boolean;
    /**
     * Watermark text for the textbox.
     */
    watermark: string;
}
/**
 * Represents the extensions part of the layout
 */
export interface Extension {
    id: string;
}
export interface FieldModel {
    description: string;
    id: string;
    listId: string;
    name: string;
    type: FieldType;
    url: string;
}
export interface FieldRuleModel {
    rule: string;
    value: string;
}
export enum FieldType {
    String = 1,
    Integer = 2,
    DateTime = 3,
    PlainText = 5,
    Html = 7,
    TreePath = 8,
    History = 9,
    Double = 10,
    Guid = 11,
    Boolean = 12,
    Identity = 13,
    PicklistInteger = 14,
    PicklistString = 15,
    PicklistDouble = 16,
}
export interface FieldUpdate {
    description: string;
    id: string;
}
export interface FormLayout {
    /**
     * Gets and sets extensions list
     */
    extensions: Extension[];
    /**
     * Top level tabs of the layout.
     */
    pages: Page[];
    /**
     * Headers controls of the layout.
     */
    systemControls: Control[];
}
/**
 * Represent a group in the form that holds controls in it.
 */
export interface Group {
    /**
     * Contribution for the group.
     */
    contribution: WitContribution;
    /**
     * Controls to be put in the group.
     */
    controls: Control[];
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * Label for the group.
     */
    label: string;
    /**
     * Order in which the group should appear in the section.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the group should be hidden or not.
     */
    visible: boolean;
}
export interface HideStateModel {
    hidden: boolean;
}
export interface Page {
    /**
     * Contribution for the page.
     */
    contribution: WitContribution;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * The label for the page.
     */
    label: string;
    /**
     * A value indicating whether any user operations are permitted on this page and the contents of this page
     */
    locked: boolean;
    /**
     * Order in which the page should appear in the layout.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * The icon for the page.
     */
    pageType: PageType;
    /**
     * The sections of the page.
     */
    sections: Section[];
    /**
     * A value indicating if the page should be hidden or not.
     */
    visible: boolean;
}
export enum PageType {
    Custom = 1,
    History = 2,
    Links = 3,
    Attachments = 4,
}
export interface PickListItemModel {
    id: string;
    value: string;
}
export interface PickListMetadataModel {
    id: string;
    isSuggested: boolean;
    name: string;
    type: string;
    url: string;
}
export interface PickListModel extends PickListMetadataModel {
    items: PickListItemModel[];
}
export interface Section {
    groups: Group[];
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
}
export interface WitContribution {
    /**
     * The id for the contribution.
     */
    contributionId: string;
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * A dictionary holding key value pairs for contribution inputs.
     */
    inputs: {
        [key: string]: any;
    };
    /**
     * A value indicating if the contribution should be show on deleted workItem.
     */
    showOnDeletedWorkItem: boolean;
}
export interface WorkItemBehavior {
    abstract: boolean;
    color: string;
    description: string;
    fields: WorkItemBehaviorField[];
    id: string;
    inherits: WorkItemBehaviorReference;
    name: string;
    overriden: boolean;
    rank: number;
    url: string;
}
export interface WorkItemBehaviorField {
    behaviorFieldId: string;
    id: string;
    url: string;
}
export interface WorkItemBehaviorReference {
    id: string;
    url: string;
}
export interface WorkItemStateInputModel {
    color: string;
    name: string;
    order: number;
    stateCategory: string;
}
export interface WorkItemStateResultModel {
    color: string;
    hidden: boolean;
    id: string;
    name: string;
    order: number;
    stateCategory: string;
    url: string;
}
export interface WorkItemTypeBehavior {
    behavior: WorkItemBehaviorReference;
    url: string;
}
export interface WorkItemTypeFieldModel {
    id: string;
    rules: FieldRuleModel[];
    url: string;
}
export interface WorkItemTypeModel {
    color: string;
    description: string;
    id: string;
    /**
     * Parent WIT Id/Internal ReferenceName that it inherits from
     */
    inherits: string;
    isDisabled: boolean;
    name: string;
    states: WorkItemStateResultModel[];
    url: string;
}
export interface WorkItemTypeUpdateModel {
    color: string;
    description: string;
    isDisabled: boolean;
}
export var TypeInfo: {
    FieldModel: any;
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
            "identity": number;
            "picklistInteger": number;
            "picklistString": number;
            "picklistDouble": number;
        };
    };
    FormLayout: any;
    Page: any;
    PageType: {
        enumValues: {
            "custom": number;
            "history": number;
            "links": number;
            "attachments": number;
        };
    };
};
}
declare module "TFS/WorkItemTracking/ProcessDefinitionsRestClient" {
import ProcessContracts = require("TFS/WorkItemTracking/ProcessContracts");
import ProcessDefinitionsContracts = require("TFS/WorkItemTracking/ProcessDefinitionsContracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2_1To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected controlsApiVersion: string;
    protected fieldsApiVersion: string;
    protected groupsApiVersion: string;
    protected layoutApiVersion: string;
    protected listsApiVersion: string;
    protected listsApiVersion_b45cc931: string;
    protected pagesApiVersion: string;
    protected statesApiVersion: string;
    protected workItemTypesApiVersion: string;
    protected workItemTypesApiVersion_921dfb88: string;
    protected workItemTypesApiVersion_afd8a636: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeUpdateModel} workitemTypeUpdate
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>
     */
    updateWorkItemType(workitemTypeUpdate: ProcessDefinitionsContracts.WorkItemTypeUpdateModel, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} expand
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel[]>
     */
    getWorkItemTypes(processId: string, expand?: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel[]>
     */
    getWorkItemType(processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<void>
     */
    deleteWorkItemType(processId: string, witRefName: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeModel} workitemType
     * @param {string} processId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>
     */
    createWorkItemType(workitemType: ProcessDefinitionsContracts.WorkItemTypeModel, processId: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} field
     * @return IPromise<void>
     */
    removeWorkItemTypeField(processId: string, witRefName: string, field: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeFieldModel} field
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel>
     */
    addWorkItemTypeField(field: ProcessDefinitionsContracts.WorkItemTypeFieldModel, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @param {string} behaviorRefName
     * @return IPromise<void>
     */
    removeBehaviorFromWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior[]>
     */
    getBehaviorsForWorkItemType(processId: string, witRefNameForBehaviors: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @param {string} behaviorRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>
     */
    getBehaviorForWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeBehavior} behavior
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>
     */
    addBehaviorToWorkItemType(behavior: ProcessDefinitionsContracts.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemStateInputModel} stateModel
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    updateStateDefinition(stateModel: ProcessDefinitionsContracts.WorkItemStateInputModel, processId: string, witRefName: string, stateId: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.HideStateModel} hideStateModel
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    hideStateDefinition(hideStateModel: ProcessDefinitionsContracts.HideStateModel, processId: string, witRefName: string, stateId: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel[]>
     */
    getStateDefinitions(processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    getStateDefinition(processId: string, witRefName: string, stateId: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<void>
     */
    deleteStateDefinition(processId: string, witRefName: string, stateId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemStateInputModel} stateModel
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    createStateDefinition(stateModel: ProcessDefinitionsContracts.WorkItemStateInputModel, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} pageId
     * @return IPromise<void>
     */
    removePage(processId: string, witRefName: string, pageId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Page} page
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.Page>
     */
    editPage(page: ProcessDefinitionsContracts.Page, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.Page>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Page} page
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.Page>
     */
    addPage(page: ProcessDefinitionsContracts.Page, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.Page>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.PickListModel} picklist
     * @param {string} listId
     * @return IPromise<ProcessDefinitionsContracts.PickListModel>
     */
    updateList(picklist: ProcessDefinitionsContracts.PickListModel, listId: string): IPromise<ProcessDefinitionsContracts.PickListModel>;
    /**
     * [Preview API]
     *
     * @param {string} listId
     * @return IPromise<ProcessDefinitionsContracts.PickListModel>
     */
    getList(listId: string): IPromise<ProcessDefinitionsContracts.PickListModel>;
    /**
     * [Preview API]
     *
     * @param {string} listId
     * @return IPromise<void>
     */
    deleteList(listId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.PickListModel} picklist
     * @return IPromise<ProcessDefinitionsContracts.PickListModel>
     */
    createList(picklist: ProcessDefinitionsContracts.PickListModel): IPromise<ProcessDefinitionsContracts.PickListModel>;
    /**
     * [Preview API]
     *
     * @return IPromise<ProcessDefinitionsContracts.PickListMetadataModel[]>
     */
    getListsMetadata(): IPromise<ProcessDefinitionsContracts.PickListMetadataModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.FormLayout>
     */
    getFormLayout(processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.FormLayout>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Group} group
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} pageId
     * @param {string} sectionId
     * @param {string} groupId
     * @param {string} removeFromSectionId
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    setGroupInSection(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromSectionId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Group} group
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} pageId
     * @param {string} sectionId
     * @param {string} groupId
     * @param {string} removeFromPageId
     * @param {string} removeFromSectionId
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    setGroupInPage(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromPageId: string, removeFromSectionId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} pageId
     * @param {string} sectionId
     * @param {string} groupId
     * @return IPromise<void>
     */
    removeGroup(processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Group} group
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} pageId
     * @param {string} sectionId
     * @param {string} groupId
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    editGroup(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Group} group
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} pageId
     * @param {string} sectionId
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    addGroup(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.FieldUpdate} field
     * @param {string} processId
     * @return IPromise<ProcessContracts.FieldModel>
     */
    updateField(field: ProcessDefinitionsContracts.FieldUpdate, processId: string): IPromise<ProcessContracts.FieldModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} field
     * @return IPromise<void>
     */
    deleteField(processId: string, field: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessContracts.FieldModel} field
     * @param {string} processId
     * @return IPromise<ProcessContracts.FieldModel>
     */
    createField(field: ProcessContracts.FieldModel, processId: string): IPromise<ProcessContracts.FieldModel>;
    /**
     * [Preview API] Puts a control withan id into a group. Controls backed by fields can generate their own id.
     *
     * @param {ProcessDefinitionsContracts.Control} control
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} groupId
     * @param {string} controlId
     * @param {string} removeFromGroupId
     * @return IPromise<ProcessDefinitionsContracts.Control>
     */
    setControlInGroup(control: ProcessDefinitionsContracts.Control, processId: string, witRefName: string, groupId: string, controlId: string, removeFromGroupId?: string): IPromise<ProcessDefinitionsContracts.Control>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} groupId
     * @param {string} controlId
     * @return IPromise<void>
     */
    removeControlFromGroup(processId: string, witRefName: string, groupId: string, controlId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.Control} control
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} groupId
     * @param {string} controlId
     * @return IPromise<ProcessDefinitionsContracts.Control>
     */
    editControl(control: ProcessDefinitionsContracts.Control, processId: string, witRefName: string, groupId: string, controlId: string): IPromise<ProcessDefinitionsContracts.Control>;
    /**
     * [Preview API] Creates a control, giving it an id, and adds it to the group. So far, the only controls that don't know how to generate their own ids are control extensions.
     *
     * @param {ProcessDefinitionsContracts.Control} control
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} groupId
     * @return IPromise<ProcessDefinitionsContracts.Control>
     */
    addControlToGroup(control: ProcessDefinitionsContracts.Control, processId: string, witRefName: string, groupId: string): IPromise<ProcessDefinitionsContracts.Control>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient3;
}
declare module "TFS/WorkItemTracking/ProcessRestClient" {
import ProcessContracts = require("TFS/WorkItemTracking/ProcessContracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2_1To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected behaviorsApiVersion: string;
    protected fieldsApiVersion: string;
    protected fieldsApiVersion_7a0e7a1a: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessContracts.FieldModel[]>
     */
    getWorkItemTypeFields(processId: string, witRefName: string): IPromise<ProcessContracts.FieldModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @return IPromise<ProcessContracts.FieldModel[]>
     */
    getFields(processId: string): IPromise<ProcessContracts.FieldModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {ProcessContracts.GetBehaviorsExpand} expand
     * @return IPromise<ProcessContracts.WorkItemBehavior[]>
     */
    getBehaviors(processId: string, expand?: ProcessContracts.GetBehaviorsExpand): IPromise<ProcessContracts.WorkItemBehavior[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} behaviorRefName
     * @param {ProcessContracts.GetBehaviorsExpand} expand
     * @return IPromise<ProcessContracts.WorkItemBehavior>
     */
    getBehavior(processId: string, behaviorRefName: string, expand?: ProcessContracts.GetBehaviorsExpand): IPromise<ProcessContracts.WorkItemBehavior>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient3;
}
declare module "TFS/WorkItemTracking/ProcessTemplateContracts" {
export interface ProcessImportResult {
    helpUrl: string;
    id: string;
    promoteJobId: string;
    validationResults: ValidationIssue[];
}
export interface ProcessPromoteStatus {
    complete: number;
    id: string;
    message: string;
    pending: number;
    remainingRetries: number;
    successful: boolean;
}
export interface ValidationIssue {
    description: string;
    file: string;
    issueType: ValidationIssueType;
    line: number;
}
export enum ValidationIssueType {
    Warning = 0,
    Error = 1,
}
export var TypeInfo: {
    ProcessImportResult: any;
    ValidationIssue: any;
    ValidationIssueType: {
        enumValues: {
            "warning": number;
            "error": number;
        };
    };
};
}
declare module "TFS/WorkItemTracking/ProcessTemplateRestClient" {
import ProcessTemplateContracts = require("TFS/WorkItemTracking/ProcessTemplateContracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2_2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected processesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Whether promote has completed for the specified promote job id
     *
     * @param {string} id
     * @return IPromise<ProcessTemplateContracts.ProcessPromoteStatus>
     */
    importProcessTemplateStatus(id: string): IPromise<ProcessTemplateContracts.ProcessPromoteStatus>;
    /**
     * [Preview API] Records supplied process template and triggers promote
     *
     * @param {string} content - Content to upload
     * @param {boolean} ignoreWarnings
     * @return IPromise<ProcessTemplateContracts.ProcessImportResult>
     */
    importProcessTemplate(content: string, ignoreWarnings?: boolean): IPromise<ProcessTemplateContracts.ProcessImportResult>;
    /**
     * [Preview API] Returns requested process template
     *
     * @param {string} id
     * @return IPromise<any>
     */
    exportProcessTemplate(id: string): IPromise<any>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient3;
}
declare module "TFS/WorkItemTracking/RestClient" {
import Contracts = require("TFS/WorkItemTracking/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected accountMyWorkApiVersion: string;
    protected accountMyWorkRecentActivityApiVersion: string;
    protected attachmentsApiVersion: string;
    protected classificationNodesApiVersion: string;
    protected classificationNodesApiVersion_a70579d1: string;
    protected fieldsApiVersion: string;
    protected queriesApiVersion: string;
    protected revisionsApiVersion: string;
    protected ruleEngineApiVersion: string;
    protected updatesApiVersion: string;
    protected wiqlApiVersion: string;
    protected wiqlApiVersion_1a9c53f7: string;
    protected workItemRelationTypesApiVersion: string;
    protected workItemsApiVersion: string;
    protected workItemsApiVersion_72c7ddf8: string;
    protected workitemStateColorApiVersion: string;
    protected workItemTypeCategoriesApiVersion: string;
    protected workitemTypeColorApiVersion: string;
    protected workItemTypesApiVersion: string;
    protected workItemTypesFieldApiVersion: string;
    protected workItemTypeStatesApiVersion: string;
    protected workItemTypeTemplateApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Add/updates a work item type
     *
     * @param {Contracts.WorkItemTypeTemplateUpdateModel} updateModel
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ProvisioningResult>
     */
    updateWorkItemTypeDefinition(updateModel: Contracts.WorkItemTypeTemplateUpdateModel, project?: string): IPromise<Contracts.ProvisioningResult>;
    /**
     * Export work item type
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} exportGlobalLists
     * @return IPromise<Contracts.WorkItemTypeTemplate>
     */
    exportWorkItemTypeDefinition(project?: string, type?: string, exportGlobalLists?: boolean): IPromise<Contracts.WorkItemTypeTemplate>;
    /**
     * @exemptedapi
     * [Preview API] Returns the state names and colors for a work item type
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @return IPromise<Contracts.WorkItemStateColor[]>
     */
    getWorkItemTypeStates(project: string, type: string): IPromise<Contracts.WorkItemStateColor[]>;
    /**
     * Returns the dependent fields for the corresponding workitem type and fieldname
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} field
     * @return IPromise<Contracts.FieldDependentRule>
     */
    getDependentFields(project: string, type: string, field: string): IPromise<Contracts.FieldDependentRule>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemType[]>
     */
    getWorkItemTypes(project: string): IPromise<Contracts.WorkItemType[]>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @return IPromise<Contracts.WorkItemType>
     */
    getWorkItemType(project: string, type: string): IPromise<Contracts.WorkItemType>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {string} project - Project ID or project name
     * @param {string} category
     * @return IPromise<Contracts.WorkItemTypeCategory>
     */
    getWorkItemTypeCategory(project: string, category: string): IPromise<Contracts.WorkItemTypeCategory>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemTypeCategory[]>
     */
    getWorkItemTypeCategories(project: string): IPromise<Contracts.WorkItemTypeCategory[]>;
    /**
     * Returns a single work item from a template
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} fields
     * @param {Date} asOf
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * @param {VSS_Common_Contracts.JsonPatchDocument} document
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @return IPromise<Contracts.WorkItem>
     */
    createWorkItem(document: VSS_Common_Contracts.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): IPromise<Contracts.WorkItem>;
    /**
     * @param {VSS_Common_Contracts.JsonPatchDocument} document
     * @param {number} id
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @return IPromise<Contracts.WorkItem>
     */
    updateWorkItem(document: VSS_Common_Contracts.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean): IPromise<Contracts.WorkItem>;
    /**
     * Returns a list of work items
     *
     * @param {number[]} ids
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {Contracts.WorkItemExpand} expand
     * @param {Contracts.WorkItemErrorPolicy} errorPolicy
     * @return IPromise<Contracts.WorkItem[]>
     */
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: Contracts.WorkItemExpand, errorPolicy?: Contracts.WorkItemErrorPolicy): IPromise<Contracts.WorkItem[]>;
    /**
     * Returns a single work item
     *
     * @param {number} id
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * @param {number} id
     * @param {boolean} destroy
     * @return IPromise<Contracts.WorkItemDelete>
     */
    deleteWorkItem(id: number, destroy?: boolean): IPromise<Contracts.WorkItemDelete>;
    /**
     * @return IPromise<Contracts.WorkItemRelationType[]>
     */
    getRelationTypes(): IPromise<Contracts.WorkItemRelationType[]>;
    /**
     * Gets the work item relation types.
     *
     * @param {string} relation
     * @return IPromise<Contracts.WorkItemRelationType>
     */
    getRelationType(relation: string): IPromise<Contracts.WorkItemRelationType>;
    /**
     * Gets the results of the query by id.
     *
     * @param {string} id - The query id.
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {boolean} timePrecision
     * @return IPromise<Contracts.WorkItemQueryResult>
     */
    queryById(id: string, project?: string, team?: string, timePrecision?: boolean): IPromise<Contracts.WorkItemQueryResult>;
    /**
     * Gets the results of the query.
     *
     * @param {Contracts.Wiql} wiql - The query containing the wiql.
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {boolean} timePrecision
     * @param {number} top
     * @return IPromise<Contracts.WorkItemQueryResult>
     */
    queryByWiql(wiql: Contracts.Wiql, project?: string, team?: string, timePrecision?: boolean, top?: number): IPromise<Contracts.WorkItemQueryResult>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemUpdate[]>
     */
    getUpdates(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemUpdate[]>;
    /**
     * Returns a single update for a work item
     *
     * @param {number} id
     * @param {number} updateNumber
     * @return IPromise<Contracts.WorkItemUpdate>
     */
    getUpdate(id: number, updateNumber: number): IPromise<Contracts.WorkItemUpdate>;
    /**
     * Validates the fields values.
     *
     * @param {Contracts.FieldsToEvaluate} ruleEngineInput
     * @return IPromise<void>
     */
    evaluateRulesOnField(ruleEngineInput: Contracts.FieldsToEvaluate): IPromise<void>;
    /**
     * Returns the list of fully hydrated work item revisions, paged.
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem[]>
     */
    getRevisions(id: number, top?: number, skip?: number, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem[]>;
    /**
     * Returns a fully hydrated work item for the requested revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getRevision(id: number, revisionNumber: number, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * @param {Contracts.QueryHierarchyItem} queryUpdate
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {boolean} undeleteDescendants
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    updateQuery(queryUpdate: Contracts.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Retrieves a single query by project and either id or path
     *
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {Contracts.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    getQuery(project: string, query: string, expand?: Contracts.QueryExpand, depth?: number, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Retrieves all queries the user has access to in the current project
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @return IPromise<Contracts.QueryHierarchyItem[]>
     */
    getQueries(project: string, expand?: Contracts.QueryExpand, depth?: number, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItem[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @return IPromise<void>
     */
    deleteQuery(project: string, query: string): IPromise<void>;
    /**
     * Creates a query, or moves a query.
     *
     * @param {Contracts.QueryHierarchyItem} postedQuery - The query to create.
     * @param {string} project - Project ID or project name
     * @param {string} query - The parent path for the query to create.
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    createQuery(postedQuery: Contracts.QueryHierarchyItem, project: string, query: string): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Returns information for all fields.
     *
     * @param {Contracts.GetFieldsExpand} expand - Use ExtensionFields to include extension fields, otherwise exclude them. Unless the feature flag for this parameter is enabled, extension fields are always included.
     * @return IPromise<Contracts.WorkItemField[]>
     */
    getFields(expand?: Contracts.GetFieldsExpand): IPromise<Contracts.WorkItemField[]>;
    /**
     * Gets information on a specific field.
     *
     * @param {string} field - Field name
     * @return IPromise<Contracts.WorkItemField>
     */
    getField(field: string): IPromise<Contracts.WorkItemField>;
    /**
     * @param {Contracts.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    updateClassificationNode(postedNode: Contracts.WorkItemClassificationNode, project: string, structureGroup: Contracts.TreeStructureGroup, path?: string): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} depth
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    getClassificationNode(project: string, structureGroup: Contracts.TreeStructureGroup, path?: string, depth?: number): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} reclassifyId
     * @return IPromise<void>
     */
    deleteClassificationNode(project: string, structureGroup: Contracts.TreeStructureGroup, path?: string, reclassifyId?: number): IPromise<void>;
    /**
     * @param {Contracts.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    createOrUpdateClassificationNode(postedNode: Contracts.WorkItemClassificationNode, project: string, structureGroup: Contracts.TreeStructureGroup, path?: string): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} depth
     * @return IPromise<Contracts.WorkItemClassificationNode[]>
     */
    getRootNodes(project: string, depth?: number): IPromise<Contracts.WorkItemClassificationNode[]>;
    /**
     * Returns an attachment
     *
     * @param {string} id
     * @param {string} fileName
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentZip(id: string, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Returns an attachment
     *
     * @param {string} id
     * @param {string} fileName
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentContent(id: string, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Creates an attachment.
     *
     * @param {any} content - Content to upload
     * @param {string} fileName
     * @param {string} uploadType
     * @return IPromise<Contracts.AttachmentReference>
     */
    createAttachment(content: any, fileName?: string, uploadType?: string): IPromise<Contracts.AttachmentReference>;
}
export class CommonMethods2_1To3_1 extends CommonMethods2To3_1 {
    protected recyclebinApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.WorkItemDeleteUpdate} payload
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemDelete>
     */
    restoreWorkItem(payload: Contracts.WorkItemDeleteUpdate, id: number, project?: string): IPromise<Contracts.WorkItemDelete>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} ids
     * @return IPromise<Contracts.WorkItemDeleteReference[]>
     */
    getDeletedWorkItems(project?: string, ids?: number[]): IPromise<Contracts.WorkItemDeleteReference[]>;
    /**
     * [Preview API]
     *
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemDelete>
     */
    getDeletedWorkItem(id: number, project?: string): IPromise<Contracts.WorkItemDelete>;
    /**
     * [Preview API]
     *
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    destroyWorkItem(id: number, project?: string): IPromise<void>;
}
export class CommonMethods2_2To3_1 extends CommonMethods2_1To3_1 {
    protected workItemLinksApiVersion: string;
    protected workItemRevisionsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a batch of work item revisions
     *
     * @param {Contracts.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {Contracts.ReportingRevisionsExpand} expand
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsPost(filter: Contracts.ReportingWorkItemRevisionsFilter, project?: string, continuationToken?: string, startDateTime?: Date, expand?: Contracts.ReportingRevisionsExpand): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item revisions with the option of including deleted items
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {boolean} includeTagRef - Specify if the tag objects should be returned for System.Tags field.
     * @param {boolean} includeLatestOnly - Return only the latest revisions of work items, skipping all historical revisions
     * @param {Contracts.ReportingRevisionsExpand} expand
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsGet(project?: string, fields?: string[], types?: string[], continuationToken?: string, startDateTime?: Date, includeIdentityRef?: boolean, includeDeleted?: boolean, includeTagRef?: boolean, includeLatestOnly?: boolean, expand?: Contracts.ReportingRevisionsExpand): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item links
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {string} continuationToken - Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemLinksBatch>
     */
    getReportingLinks(project?: string, types?: string[], continuationToken?: string, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemLinksBatch>;
}
export class CommonMethods3To3_1 extends CommonMethods2_2To3_1 {
    protected commentsApiVersion: string;
    protected templatesApiVersion: string;
    protected templatesApiVersion_6a90345f: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Replace template contents
     *
     * @param {Contracts.WorkItemTemplate} templateContent - Template contents to replace with
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} templateId - Template id
     * @return IPromise<Contracts.WorkItemTemplate>
     */
    replaceTemplate(templateContent: Contracts.WorkItemTemplate, project: string, team: string, templateId: string): IPromise<Contracts.WorkItemTemplate>;
    /**
     * [Preview API] Gets the template with specified id
     *
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} templateId - Template Id
     * @return IPromise<Contracts.WorkItemTemplate>
     */
    getTemplate(project: string, team: string, templateId: string): IPromise<Contracts.WorkItemTemplate>;
    /**
     * [Preview API] Deletes the template with given id
     *
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} templateId - Template id
     * @return IPromise<void>
     */
    deleteTemplate(project: string, team: string, templateId: string): IPromise<void>;
    /**
     * [Preview API] Gets template
     *
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} workitemtypename - Optional, When specified returns templates for given Work item type.
     * @return IPromise<Contracts.WorkItemTemplateReference[]>
     */
    getTemplates(project: string, team: string, workitemtypename?: string): IPromise<Contracts.WorkItemTemplateReference[]>;
    /**
     * [Preview API] Creates a template
     *
     * @param {Contracts.WorkItemTemplate} template - Template contents
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @return IPromise<Contracts.WorkItemTemplate>
     */
    createTemplate(template: Contracts.WorkItemTemplate, project: string, team: string): IPromise<Contracts.WorkItemTemplate>;
    /**
     * [Preview API] Returns specified number of comments for a work item from the specified revision
     *
     * @param {number} id - Work item id
     * @param {number} fromRevision - Revision from which comments are to be fetched
     * @param {number} top - The number of comments to return
     * @param {Contracts.CommentSortOrder} order - Ascending or descending by revision id
     * @return IPromise<Contracts.WorkItemComments>
     */
    getComments(id: number, fromRevision?: number, top?: number, order?: Contracts.CommentSortOrder): IPromise<Contracts.WorkItemComments>;
    /**
     * [Preview API] Returns comment for a work item at the specified revision
     *
     * @param {number} id
     * @param {number} revision
     * @return IPromise<Contracts.WorkItemComment>
     */
    getComment(id: number, revision: number): IPromise<Contracts.WorkItemComment>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
}
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
}
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
}
export class WorkItemTrackingHttpClient2_1 extends CommonMethods2_1To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
    /**
     * Get a batch of work item links
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemLinksBatch>
     */
    getReportingLinks(project?: string, types?: string[], watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemLinksBatch>;
    /**
     * Get a batch of work item revisions with the option of including deleted items
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsGet(project?: string, includeDeleted?: boolean, fields?: string[], types?: string[], watermark?: number, startDateTime?: Date, includeIdentityRef?: boolean): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item revisions
     *
     * @param {Contracts.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsPost(filter: Contracts.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
}
export class WorkItemTrackingHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
    /**
     * Get a batch of work item links
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemLinksBatch>
     */
    getReportingLinks(project?: string, types?: string[], watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemLinksBatch>;
    /**
     * Get a batch of work item revisions with the option of including deleted items
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsGet(project?: string, includeDeleted?: boolean, fields?: string[], types?: string[], watermark?: number, startDateTime?: Date, includeIdentityRef?: boolean): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item revisions
     *
     * @param {Contracts.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsPost(filter: Contracts.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient3;
}
declare module "TFS/WorkItemTracking/Services" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
import WitContracts = require("TFS/WorkItemTracking/Contracts");
/**
* Host service for opening the work item form
*/
export interface IWorkItemFormNavigationService {
    /**
    * Opens the specified work item. The host page will display the work item in a dialog,
    * or it may update the current page view, depending on the current page.
    *
    * @param {number} workItemId The id of the work item to open
    * @param {boolean} openInNewTab (Optional) If true, opens the work item in a new tab. Default is false
    * @returns {IPromise<void>} An empty promise.
    */
    openWorkItem(workItemId: number, openInNewTab?: boolean): IPromise<void>;
    /**
    * Opens a new work item of the specified type. The host page will display the new work item in a dialog,
    * or it may update the current page view, depending on the current page.
    *
    * @param {string} workItemTypeName The name of the work item type to open
    * @param {IDictionaryStringTo<Object>} initialValues (Optional) A dictionary of any initial field values to set after opening the new work item.
    * @returns {IPromise<void>} An empty promise.
    */
    openNewWorkItem(workItemTypeName: string, initialValues?: IDictionaryStringTo<Object>): IPromise<void>;
}
/**
* Host service for opening the work item form
*/
export module WorkItemFormNavigationService {
    var contributionId: string;
    /**
    * Get an instance of the host work item service
    *
    * @param webContext Optional web context to scope the service to
    */
    function getService(webContext?: Contracts_Platform.WebContext): IPromise<IWorkItemFormNavigationService>;
}
/**
* Host service for interacting with the currently active work item form (work item currently displayed in the UI).
*/
export interface IWorkItemFormService {
    /**
    * Gets id of active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<number>} A promise that returns the active work item id.
    */
    getId(): IPromise<number>;
    /**
    * Gets active work item's latest revision.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<number>} A promise that returns the active work item's latest revision id.
    */
    getRevision(): IPromise<number>;
    /**
    * Gets active work item fields.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<WorkItemField[]>} A promise that returns an array of work item field.
    */
    getFields(): IPromise<WitContracts.WorkItemField[]>;
    /**
    * Gets field value of active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {string} fieldReferenceName Field reference name
    * @param {boolean} returnOriginalValue (Optional) If false, gets unsaved field values. Default is false.
    * @returns {IPromise<Object>} A promise that returns the value of the work item field.
    */
    getFieldValue(fieldReferenceName: string, returnOriginalValue?: boolean): IPromise<Object>;
    /**
    * Gets field values of active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {string[]} fieldReferenceNames An arrary of field reference names
    * @param {boolean} returnOriginalValue (Optional) If false, gets unsaved field values. Default is false.
    * @returns {IPromise<IDictionaryStringTo<Object>>} A promise that returns a dictionary of work item field values (refName to values pairs).
    */
    getFieldValues(fieldReferenceNames: string[], returnOriginalValue?: boolean): IPromise<IDictionaryStringTo<Object>>;
    /**
    * Sets field value of active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {string} fieldReferenceName Field reference name
    * @param {Object} value Field value
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the function completed successfully.
    */
    setFieldValue(fieldReferenceName: string, value: Object): IPromise<boolean>;
    /**
    * Sets field values of active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {IDictionaryStringTo<Object>} fields A dictionary of field refName/values
    * @returns {IPromise<IDictionaryStringTo<boolean>>} A promise that returns a dictionary of field value update results (refName to results pairs).
    */
    setFieldValues(fields: IDictionaryStringTo<Object>): IPromise<IDictionaryStringTo<boolean>>;
    /**
    * Gets the allowed values for the field on active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {string} fieldReferenceName Field reference name
    * @returns {IPromise<string[]>} A promise that returns an array of allowed values.
    */
    getAllowedFieldValues(fieldReferenceName: string): IPromise<string[]>;
    /**
    * Returns true if active work item is dirty.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the active work item is dirty.
    */
    isDirty(): IPromise<boolean>;
    /**
    * Returns true if active work item is new.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the active work item is new.
    */
    isNew(): IPromise<boolean>;
    /**
    * Returns true if active work item fields are all valid.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether all field values are valid.
    */
    isValid(): IPromise<boolean>;
    /**
    * Gets invalid fields.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<WorkItemField[]>} A promise that returns an array of invalid work item fields.
    */
    getInvalidFields(): IPromise<WitContracts.WorkItemField[]>;
    /**
    * Adds work item relations to active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {WorkItemRelation[]} workItemRelations Work item links to add.
    * @returns {IPromise<void>} An empty promise.
    */
    addWorkItemRelations(workItemRelations: WitContracts.WorkItemRelation[]): IPromise<void>;
    /**
    * Removes work item relations from active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {WorkItemRelation[]} workItemRelations Work item links to remove.
    * @returns {IPromise<void>} An empty promise.
    */
    removeWorkItemRelations(workItemRelations: WitContracts.WorkItemRelation[]): IPromise<void>;
    /**
    * Returns an array of work item relations of active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<WorkItemRelation[]>} A promise that returns an array of work item relations of active work item.
    */
    getWorkItemRelations(): IPromise<WitContracts.WorkItemRelation[]>;
    /**
    * Returns resource url of specified workitem.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {number} workItemId Id of the work item that the resource url is requested for.
    * @returns {IPromise<string>} A promise that returns the requested resource url of the work item.
    */
    getWorkItemResourceUrl(workItemId: number): IPromise<string>;
    /**
    * Returns an array of work item relation types.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<WorkItemRelationType[]>} A promise that returns an array of work item relation types.
    */
    getWorkItemRelationTypes(): IPromise<WitContracts.WorkItemRelationType[]>;
    /**
    * Returns true if active work item available.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the active work item is available.
    */
    hasActiveWorkItem(): IPromise<boolean>;
    /**
    * Saves active work item.
    * Form service depends on the current active work item context. Will throw an error when there is no open work item.
    *
    * @param {Function} successCallback Callback function when active work item saved successfully.
    * @param {Function} errorCallback Callback function when active work item failed to save.
    */
    beginSaveWorkItem(successCallback: () => void, errorCallback: () => void): IPromise<void>;
}
export module WorkItemFormService {
    var contributionId: string;
    /**
    * Get an instance of the host work item service
    *
    * @param webContext Optional web context to scope the service to
    */
    function getService(webContext?: Contracts_Platform.WebContext): IPromise<IWorkItemFormService>;
}
}
declare module "TFS/WorkItemTracking/UIContracts" {
import WitContracts = require("TFS/WorkItemTracking/Contracts");
/**
 * A query result in the WIT UI
 */
export interface QueryResultWorkItemContext {
    columns: string[];
    rows: any[];
    query: WitContracts.QueryHierarchyItem;
}
/**
 * A work item query in the WIT UI
 */
export interface WorkItemQueryContext {
    query: WitContracts.QueryHierarchyItem;
}
}
declare module "TFS/Work/Contracts" {
import System_Contracts = require("VSS/Common/Contracts/System");
import WorkItemTracking_Contracts = require("TFS/WorkItemTracking/Contracts");
export interface Activity {
    capacityPerDay: number;
    name: string;
}
export interface attribute {
}
/**
 * Contract representing a backlog level
 */
export interface BacklogLevel {
    /**
     * Reference name of the corresponding WIT category
     */
    categoryReferenceName: string;
    /**
     * Plural name for the backlog level
     */
    pluralName: string;
    /**
     * Collection of valid workitem type names for the given backlog level
     */
    workItemTypes: string[];
}
export interface Board extends ShallowReference {
    _links: any;
    allowedMappings: {
        [key: string]: {
            [key: string]: string[];
        };
    };
    canEdit: boolean;
    columns: BoardColumn[];
    fields: BoardFields;
    isValid: boolean;
    revision: number;
    rows: BoardRow[];
}
export interface BoardCardRuleSettings {
    _links: any;
    rules: {
        [key: string]: Rule[];
    };
    url: string;
}
export interface BoardCardSettings {
    cards: {
        [key: string]: FieldSetting[];
    };
}
export interface BoardChart extends BoardChartReference {
    /**
     * The links for the resource
     */
    _links: any;
    /**
     * The settings for the resource
     */
    settings: {
        [key: string]: any;
    };
}
export interface BoardChartReference {
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface BoardColumn {
    columnType: BoardColumnType;
    description: string;
    id: string;
    isSplit: boolean;
    itemLimit: number;
    name: string;
    stateMappings: {
        [key: string]: string;
    };
}
export enum BoardColumnType {
    Incoming = 0,
    InProgress = 1,
    Outgoing = 2,
}
export interface BoardFields {
    columnField: FieldReference;
    doneField: FieldReference;
    rowField: FieldReference;
}
export interface BoardFilterSettings {
    criteria: FilterModel;
    parentWorkItemIds: number[];
    queryText: string;
}
export interface BoardReference extends ShallowReference {
}
export interface BoardRow {
    id: string;
    name: string;
}
export interface BoardSuggestedValue {
    name: string;
}
export interface BoardUserSettings {
    autoRefreshState: boolean;
}
export enum BugsBehavior {
    Off = 0,
    AsRequirements = 1,
    AsTasks = 2,
}
/**
 * Expected data from PATCH
 */
export interface CapacityPatch {
    activities: Activity[];
    daysOff: DateRange[];
}
/**
 * Card settings, such as fields and rules
 */
export interface CardFieldSettings {
    /**
     * A collection of field reference names of additional fields on cards. The index in the collection signifies the order of the field among the additional fields. Currently unused. Should be used with User Story 691539: Card setting: additional fields
     */
    additionalFields: string[];
    /**
     * Display format for the assigned to field
     */
    assignedToDisplayFormat: IdentityDisplayFormat;
    /**
     * Flag indicating whether to show assigned to field on cards. When true, AssignedToDisplayFormat will determine how the field will be displayed
     */
    showAssignedTo: boolean;
    /**
     * Flag indicating whether to show empty fields on cards
     */
    showEmptyFields: boolean;
    /**
     * Flag indicating whether to show ID on cards
     */
    showId: boolean;
    /**
     * Flag indicating whether to show state field on cards
     */
    showState: boolean;
    /**
     * Flag indicating whether to show tags on cards
     */
    showTags: boolean;
}
/**
 * Card settings, such as fields and rules
 */
export interface CardSettings {
    /**
     * A collection of settings related to rendering of fields on cards
     */
    fields: CardFieldSettings;
}
/**
 * Details about a given backlog category
 */
export interface CategoryConfiguration {
    /**
     * Name
     */
    name: string;
    /**
     * Category Reference Name
     */
    referenceName: string;
    /**
     * Work item types for the backlog category
     */
    workItemTypes: WorkItemTracking_Contracts.WorkItemTypeReference[];
}
export interface CreatePlan {
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Name of the plan to create.
     */
    name: string;
    /**
     * Plan properties.
     */
    properties: any;
    /**
     * Type of plan to create.
     */
    type: PlanType;
}
export interface DateRange {
    /**
     * End of the date range.
     */
    end: Date;
    /**
     * Start of the date range.
     */
    start: Date;
}
/**
 * Data contract for Data of Delivery View
 */
export interface DeliveryViewData extends PlanViewData {
    /**
     * Work item child id to parenet id map
     */
    childIdToParentIdMap: {
        [key: number]: number;
    };
    /**
     * The end date of the delivery view data
     */
    endDate: Date;
    /**
     * The start date for the delivery view data
     */
    startDate: Date;
    /**
     * All the team data
     */
    teams: TimelineTeamData[];
}
/**
 * Collection of properties, specific to the DeliveryTimelineView
 */
export interface DeliveryViewProperyCollection extends PlanPropertyCollection {
    teamBacklogMappings: TeamBacklogMapping[];
}
/**
 * An abstracted reference to a field
 */
export interface FieldReference {
    /**
     * fieldRefName for the field
     */
    referenceName: string;
    /**
     * Full http link to more information about the field
     */
    url: string;
}
export interface FieldSetting {
}
export interface FilterClause {
    fieldName: string;
    index: number;
    logicalOperator: string;
    operator: string;
    value: string;
}
export interface FilterGroup {
    end: number;
    level: number;
    start: number;
}
export interface FilterModel {
    clauses: FilterClause[];
    groups: FilterGroup[];
    maxGroupLevel: number;
}
export enum IdentityDisplayFormat {
    /**
     * Display avatar only
     */
    AvatarOnly = 0,
    /**
     * Display Full name only
     */
    FullName = 1,
    /**
     * Display Avatar and Full name
     */
    AvatarAndFullName = 2,
}
export interface Member {
    displayName: string;
    id: string;
    imageUrl: string;
    uniqueName: string;
    url: string;
}
export interface ParentChildWIMap {
    childWorkItemIds: number[];
    id: number;
    title: string;
}
/**
 * Data contract for the plan definition
 */
export interface Plan {
    /**
     * Card settings such as fields and rules
     */
    cardSettings: CardSettings;
    /**
     * Identity when the plan was created. Default to Empty Guid for the existing records before upgrading to ScaledAgileViewComponent4, which means we do not know the identity that created this resource.
     */
    createdBy: string;
    /**
     * Date when the plan was created
     */
    createdDate: Date;
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Id of the plan
     */
    id: string;
    /**
     * Identity when the plan was last modified.  Default to Empty Guid for the existing records before upgrading to ScaledAgileViewComponent4, which means we do not know the identity that last modified this resource.
     */
    modifiedBy: string;
    /**
     * Date when the plan was last modified. Default to CreatedDate when the plan is first created.
     */
    modifiedDate: Date;
    /**
     * Name of the plan
     */
    name: string;
    /**
     * OwnerId of the plan, typically same as the TFID of the team under which this plan has been created
     */
    ownerId: string;
    /**
     * The PlanPropertyCollection instance associated with the plan. These are dependent on the type of the plan. For example, DeliveryTimelineView, it would be of type DeliveryViewProperyCollection.
     */
    properties: any;
    /**
     * Revision of the plan. Used to safeguard users from overwriting each other's changes.
     */
    revision: number;
    /**
     * Type of the plan
     */
    type: PlanType;
    /**
     * The resource url to locate the plan via rest api
     */
    url: string;
}
export interface PlanMetadata {
    createdBy: string;
    description: string;
    modifiedDate: Date;
}
/**
 * Base class for properties of a scaled agile plan
 */
export interface PlanPropertyCollection {
}
export enum PlanType {
    DeliveryTimelineView = 0,
}
/**
 * Base class for plan view data contracts. Anything common goes here.
 */
export interface PlanViewData {
    id: string;
    name: string;
    revision: number;
}
/**
 * Process Configurations for the project
 */
export interface ProcessConfiguration {
    /**
     * Details about bug work items
     */
    bugWorkItems: CategoryConfiguration;
    /**
     * Details about portfolio backlogs
     */
    portfolioBacklogs: CategoryConfiguration[];
    /**
     * Details of requirement backlog
     */
    requirementBacklog: CategoryConfiguration;
    /**
     * Details of task backlog
     */
    taskBacklog: CategoryConfiguration;
    /**
     * Type fields for the process configuration
     */
    typeFields: {
        [key: string]: WorkItemTracking_Contracts.WorkItemFieldReference;
    };
    url: string;
}
export interface Rule {
    clauses: FilterClause[];
    filter: string;
    isEnabled: string;
    name: string;
    settings: attribute;
}
/**
 * An abstracted reference to some other resource. This class is used to provide the board data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
/**
 * Mapping of teams to the corresponding work item category
 */
export interface TeamBacklogMapping {
    categoryReferenceName: string;
    teamId: string;
}
/**
 * Represents a single TeamFieldValue
 */
export interface TeamFieldValue {
    includeChildren: boolean;
    value: string;
}
/**
 * Essentially a collection of team field values
 */
export interface TeamFieldValues extends TeamSettingsDataContractBase {
    /**
     * The default team field value
     */
    defaultValue: string;
    /**
     * Shallow ref to the field being used as a team field
     */
    field: FieldReference;
    /**
     * Collection of all valid team field values
     */
    values: TeamFieldValue[];
}
/**
 * Expected data from PATCH
 */
export interface TeamFieldValuesPatch {
    defaultValue: string;
    values: TeamFieldValue[];
}
export interface TeamIterationAttributes {
    finishDate: Date;
    startDate: Date;
}
/**
 * Represents capacity for a specific team member
 */
export interface TeamMemberCapacity extends TeamSettingsDataContractBase {
    /**
     * Collection of capacities associated with the team member
     */
    activities: Activity[];
    /**
     * The days off associated with the team member
     */
    daysOff: DateRange[];
    /**
     * Shallow Ref to the associated team member
     */
    teamMember: Member;
}
/**
 * Data contract for TeamSettings
 */
export interface TeamSetting extends TeamSettingsDataContractBase {
    /**
     * Backlog Iteration
     */
    backlogIteration: TeamSettingsIteration;
    /**
     * Information about categories that are visible on the backlog.
     */
    backlogVisibilities: {
        [key: string]: boolean;
    };
    /**
     * BugsBehavior (Off, AsTasks, AsRequirements, ...)
     */
    bugsBehavior: BugsBehavior;
    /**
     * Default Iteration, the iteration used when creating a new work item on the queries page.
     */
    defaultIteration: TeamSettingsIteration;
    /**
     * Default Iteration macro (if any)
     */
    defaultIterationMacro: string;
    /**
     * Days that the team is working
     */
    workingDays: System_Contracts.DayOfWeek[];
}
/**
 * Base class for TeamSettings data contracts. Anything common goes here.
 */
export interface TeamSettingsDataContractBase {
    /**
     * Collection of links relevant to resource
     */
    _links: any;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface TeamSettingsDaysOff extends TeamSettingsDataContractBase {
    daysOff: DateRange[];
}
export interface TeamSettingsDaysOffPatch {
    daysOff: DateRange[];
}
/**
 * Represents a shallow ref for a single iteration
 */
export interface TeamSettingsIteration extends TeamSettingsDataContractBase {
    /**
     * Attributes such as start and end date
     */
    attributes: TeamIterationAttributes;
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Relative path of the iteration
     */
    path: string;
}
/**
 * Data contract for what we expect to receive when PATCH
 */
export interface TeamSettingsPatch {
    backlogIteration: string;
    backlogVisibilities: {
        [key: string]: boolean;
    };
    bugsBehavior: BugsBehavior;
    defaultIteration: string;
    defaultIterationMacro: string;
    workingDays: System_Contracts.DayOfWeek[];
}
export interface TimelineIterationStatus {
    message: string;
    type: TimelineIterationStatusCode;
}
export enum TimelineIterationStatusCode {
    /**
     * No error - iteration data is good.
     */
    OK = 0,
    /**
     * This iteration overlaps with another iteration, no data is returned for this iteration.
     */
    IsOverlapping = 1,
}
export interface TimelineTeamData {
    /**
     * Backlog matching the mapped backlog associated with this team.
     */
    backlog: BacklogLevel;
    /**
     * The field reference names of the work item data
     */
    fieldReferenceNames: string[];
    /**
     * The id of the team
     */
    id: string;
    /**
     * Was iteration and work item data retrieved for this team.  Teams with IsExpanded false have not had their iteration, work item, and field related data queried and will never contain this data. If true then these items are queried and, if there are items in the queried range, there will be data.
     */
    isExpanded: boolean;
    /**
     * The iteration data, including the work items, in the queried date range.
     */
    iterations: TimelineTeamIteration[];
    /**
     * The name of the team
     */
    name: string;
    /**
     * The order by field name of this team
     */
    orderByField: string;
    /**
     * The field reference names of the partially paged work items, such as ID, WorkItemType
     */
    partiallyPagedFieldReferenceNames: string[];
    /**
     * The project id the team belongs team
     */
    projectId: string;
    /**
     * Status for this team.
     */
    status: TimelineTeamStatus;
    /**
     * The team field default value
     */
    teamFieldDefaultValue: string;
    /**
     * The team field name of this team
     */
    teamFieldName: string;
    /**
     * The team field values
     */
    teamFieldValues: TeamFieldValue[];
    /**
     * Colors for the work item types.
     */
    workItemTypeColors: WorkItemColor[];
}
export interface TimelineTeamIteration {
    /**
     * The end date of the iteration
     */
    finishDate: Date;
    /**
     * The iteration name
     */
    name: string;
    /**
     * All the partially paged workitems in this iteration.
     */
    partiallyPagedWorkItems: any[][];
    /**
     * The iteration path
     */
    path: string;
    /**
     * The start date of the iteration
     */
    startDate: Date;
    /**
     * The status of this iteration
     */
    status: TimelineIterationStatus;
    /**
     * The work items that have been paged in this iteration
     */
    workItems: any[][];
}
export interface TimelineTeamStatus {
    message: string;
    type: TimelineTeamStatusCode;
}
export enum TimelineTeamStatusCode {
    /**
     * No error - all data for team is good.
     */
    OK = 0,
    /**
     * Team does not exist or access is denied.
     */
    DoesntExistOrAccessDenied = 1,
    /**
     * Maximum number of teams was exceeded. No team data will be returned for this team.
     */
    MaxTeamsExceeded = 2,
    /**
     * Maximum number of team fields (ie Area paths) have been exceeded. No team data will be returned for this team.
     */
    MaxTeamFieldsExceeded = 3,
    /**
     * Backlog does not exist or is missing crucial information.
     */
    BacklogInError = 4,
}
export interface UpdatePlan {
    /**
     * Card settings such as fields and rules
     */
    cardSettings: CardSettings;
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Name of the plan to create.
     */
    name: string;
    /**
     * Plan properties.
     */
    properties: any;
    /**
     * Revision of the plan that was updated - the value used here should match the one the server gave the client in the Plan.
     */
    revision: number;
}
/**
 * Work item color.
 */
export interface WorkItemColor {
    primaryColor: string;
    workItemTypeName: string;
}
export var TypeInfo: {
    Board: any;
    BoardColumn: any;
    BoardColumnType: {
        enumValues: {
            "incoming": number;
            "inProgress": number;
            "outgoing": number;
        };
    };
    BugsBehavior: {
        enumValues: {
            "off": number;
            "asRequirements": number;
            "asTasks": number;
        };
    };
    CapacityPatch: any;
    CardFieldSettings: any;
    CardSettings: any;
    CreatePlan: any;
    DateRange: any;
    DeliveryViewData: any;
    IdentityDisplayFormat: {
        enumValues: {
            "avatarOnly": number;
            "fullName": number;
            "avatarAndFullName": number;
        };
    };
    Plan: any;
    PlanMetadata: any;
    PlanType: {
        enumValues: {
            "deliveryTimelineView": number;
        };
    };
    TeamIterationAttributes: any;
    TeamMemberCapacity: any;
    TeamSetting: any;
    TeamSettingsDaysOff: any;
    TeamSettingsDaysOffPatch: any;
    TeamSettingsIteration: any;
    TeamSettingsPatch: any;
    TimelineIterationStatus: any;
    TimelineIterationStatusCode: {
        enumValues: {
            "oK": number;
            "isOverlapping": number;
        };
    };
    TimelineTeamData: any;
    TimelineTeamIteration: any;
    TimelineTeamStatus: any;
    TimelineTeamStatusCode: {
        enumValues: {
            "oK": number;
            "doesntExistOrAccessDenied": number;
            "maxTeamsExceeded": number;
            "maxTeamFieldsExceeded": number;
            "backlogInError": number;
        };
    };
    UpdatePlan: any;
};
}
declare module "TFS/Work/RestClient" {
import Contracts = require("TFS/Work/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To3_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected boardcolumnsApiVersion: string;
    protected boardrowsApiVersion: string;
    protected boardsApiVersion: string;
    protected capacitiesApiVersion: string;
    protected cardrulesettingsApiVersion: string;
    protected cardsettingsApiVersion: string;
    protected chartsApiVersion: string;
    protected columnsApiVersion: string;
    protected iterationsApiVersion: string;
    protected processconfigurationApiVersion: string;
    protected rowsApiVersion: string;
    protected teamdaysoffApiVersion: string;
    protected teamfieldvaluesApiVersion: string;
    protected teamsettingsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {Contracts.TeamSettingsPatch} teamSettingsPatch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSetting>
     */
    updateTeamSettings(teamSettingsPatch: Contracts.TeamSettingsPatch, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSetting>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSetting>
     */
    getTeamSettings(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSetting>;
    /**
     * @param {Contracts.TeamFieldValuesPatch} patch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamFieldValues>
     */
    updateTeamFieldValues(patch: Contracts.TeamFieldValuesPatch, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamFieldValues>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamFieldValues>
     */
    getTeamFieldValues(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamFieldValues>;
    /**
     * @param {Contracts.TeamSettingsDaysOffPatch} daysOffPatch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.TeamSettingsDaysOff>
     */
    updateTeamDaysOff(daysOffPatch: Contracts.TeamSettingsDaysOffPatch, teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamSettingsDaysOff>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.TeamSettingsDaysOff>
     */
    getTeamDaysOff(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamSettingsDaysOff>;
    /**
     * @param {Contracts.BoardRow[]} boardRows
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardRow[]>
     */
    updateBoardRows(boardRows: Contracts.BoardRow[], teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardRow[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardRow[]>
     */
    getBoardRows(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardRow[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ProcessConfiguration>
     */
    getProcessConfiguration(project: string): IPromise<Contracts.ProcessConfiguration>;
    /**
     * @param {Contracts.TeamSettingsIteration} iteration
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSettingsIteration>
     */
    postTeamIteration(iteration: Contracts.TeamSettingsIteration, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSettingsIteration>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} timeframe
     * @return IPromise<Contracts.TeamSettingsIteration[]>
     */
    getTeamIterations(teamContext: TFS_Core_Contracts.TeamContext, timeframe?: string): IPromise<Contracts.TeamSettingsIteration[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id
     * @return IPromise<Contracts.TeamSettingsIteration>
     */
    getTeamIteration(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.TeamSettingsIteration>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id
     * @return IPromise<void>
     */
    deleteTeamIteration(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<void>;
    /**
     * @param {Contracts.BoardColumn[]} boardColumns
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardColumn[]>
     */
    updateBoardColumns(boardColumns: Contracts.BoardColumn[], teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardColumn[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardColumn[]>
     */
    getBoardColumns(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardColumn[]>;
    /**
     * Update a board chart
     *
     * @param {Contracts.BoardChart} chart
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either category plural name (Eg:"Stories") or Guid
     * @param {string} name - The chart name
     * @return IPromise<Contracts.BoardChart>
     */
    updateBoardChart(chart: Contracts.BoardChart, teamContext: TFS_Core_Contracts.TeamContext, board: string, name: string): IPromise<Contracts.BoardChart>;
    /**
     * Get board charts
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either category plural name (Eg:"Stories") or Guid
     * @return IPromise<Contracts.BoardChartReference[]>
     */
    getBoardCharts(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardChartReference[]>;
    /**
     * Get a board chart
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either category plural name (Eg:"Stories") or Guid
     * @param {string} name - The chart name
     * @return IPromise<Contracts.BoardChart>
     */
    getBoardChart(teamContext: TFS_Core_Contracts.TeamContext, board: string, name: string): IPromise<Contracts.BoardChart>;
    /**
     * Update board card settings for the board id or board by name
     *
     * @param {Contracts.BoardCardSettings} boardCardSettingsToSave
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardSettings>
     */
    updateBoardCardSettings(boardCardSettingsToSave: Contracts.BoardCardSettings, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardSettings>;
    /**
     * Get board card settings for the board id or board by name
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardSettings>
     */
    getBoardCardSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardSettings>;
    /**
     * @exemptedapi
     * [Preview API] Update board card Rule settings for the board id or board by name
     *
     * @param {Contracts.BoardCardRuleSettings} boardCardRuleSettings
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardRuleSettings>
     */
    updateBoardCardRuleSettings(boardCardRuleSettings: Contracts.BoardCardRuleSettings, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardRuleSettings>;
    /**
     * @exemptedapi
     * [Preview API] Get board card Rule settings for the board id or board by name
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardRuleSettings>
     */
    getBoardCardRuleSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardRuleSettings>;
    /**
     * @param {Contracts.CapacityPatch} patch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @param {string} teamMemberId
     * @return IPromise<Contracts.TeamMemberCapacity>
     */
    updateCapacity(patch: Contracts.CapacityPatch, teamContext: TFS_Core_Contracts.TeamContext, iterationId: string, teamMemberId: string): IPromise<Contracts.TeamMemberCapacity>;
    /**
     * @param {Contracts.TeamMemberCapacity[]} capacities
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.TeamMemberCapacity[]>
     */
    replaceCapacities(capacities: Contracts.TeamMemberCapacity[], teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamMemberCapacity[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @param {string} teamMemberId
     * @return IPromise<Contracts.TeamMemberCapacity>
     */
    getCapacity(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string, teamMemberId: string): IPromise<Contracts.TeamMemberCapacity>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.TeamMemberCapacity[]>
     */
    getCapacities(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamMemberCapacity[]>;
    /**
     * Update board options
     *
     * @param {{ [key: string] : string; }} options - options to updated
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - identifier for board, either category plural name (Eg:"Stories") or guid
     * @return IPromise<{ [key: string] : string; }>
     */
    setBoardOptions(options: {
        [key: string]: string;
    }, teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<{
        [key: string]: string;
    }>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.BoardReference[]>
     */
    getBoards(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.BoardReference[]>;
    /**
     * Get board
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - identifier for board, either category plural name (Eg:"Stories") or guid
     * @return IPromise<Contracts.Board>
     */
    getBoard(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.Board>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BoardSuggestedValue[]>
     */
    getRowSuggestedValues(project?: string): IPromise<Contracts.BoardSuggestedValue[]>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BoardSuggestedValue[]>
     */
    getColumnSuggestedValues(project?: string): IPromise<Contracts.BoardSuggestedValue[]>;
}
export class CommonMethods3To3_1 extends CommonMethods2To3_1 {
    protected boardfiltersettingsApiVersion: string;
    protected boardparentsApiVersion: string;
    protected boardusersettingsApiVersion: string;
    protected deliverytimelineApiVersion: string;
    protected plansApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Update the information for the specified plan
     *
     * @param {Contracts.UpdatePlan} updatedPlan - Plan definition to be updated
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - Identifier of the plan
     * @return IPromise<Contracts.Plan>
     */
    updatePlan(updatedPlan: Contracts.UpdatePlan, teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.Plan>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.Plan[]>
     */
    getPlans(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.Plan[]>;
    /**
     * [Preview API] Get the information for the specified plan
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - Identifier of the plan
     * @return IPromise<Contracts.Plan>
     */
    getPlan(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.Plan>;
    /**
     * [Preview API] Delete the specified plan
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - Identifier of the plan
     * @return IPromise<void>
     */
    deletePlan(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<void>;
    /**
     * [Preview API] Add a new plan for the team
     *
     * @param {Contracts.CreatePlan} postedPlan - Plan definition
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.Plan>
     */
    createPlan(postedPlan: Contracts.CreatePlan, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.Plan>;
    /**
     * [Preview API] Get Delivery View Data
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - Identifier for delivery view
     * @param {number} revision - Revision of the plan for which you want data. If the current plan is a different revision you will get an ViewRevisionMismatchException exception. If you do not supply a revision you will get data for the latest revision.
     * @param {Date} startDate - The start date of timeline
     * @param {Date} endDate - The end date of timeline
     * @return IPromise<Contracts.DeliveryViewData>
     */
    getDeliveryTimelineData(teamContext: TFS_Core_Contracts.TeamContext, id: string, revision?: number, startDate?: Date, endDate?: Date): IPromise<Contracts.DeliveryViewData>;
    /**
     * [Preview API] Update board user settings for the board id
     *
     * @param {{ [key: string] : string; }} boardUserSettings
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardUserSettings>
     */
    updateBoardUserSettings(boardUserSettings: {
        [key: string]: string;
    }, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardUserSettings>;
    /**
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardUserSettings>
     */
    getBoardUserSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardUserSettings>;
    /**
     * [Preview API] Returns the list of parent field filter model for the given list of workitem ids
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} childBacklogContextCategoryRefName
     * @param {number[]} workitemIds
     * @return IPromise<Contracts.ParentChildWIMap[]>
     */
    getBoardMappingParentItems(teamContext: TFS_Core_Contracts.TeamContext, childBacklogContextCategoryRefName: string, workitemIds: number[]): IPromise<Contracts.ParentChildWIMap[]>;
    /**
     * [Preview API] Update board filter settings for the board id or board by name
     *
     * @param {Contracts.BoardFilterSettings} filterSettings
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardFilterSettings>
     */
    updateBoardFilterSettings(filterSettings: Contracts.BoardFilterSettings, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardFilterSettings>;
    /**
     * [Preview API] Returns the board filter settings for the given board id or board by name
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardFilterSettings>
     */
    getBoardFilterSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardFilterSettings>;
}
/**
 * @exemptedapi
 */
export class WorkHttpClient3_1 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient3 extends CommonMethods3To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2_3 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2_2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2_1 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2 extends CommonMethods2To3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkHttpClient extends WorkHttpClient3_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkHttpClient3
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkHttpClient3;
}
