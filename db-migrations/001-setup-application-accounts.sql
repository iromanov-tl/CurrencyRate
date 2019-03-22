CREATE TABLE [dbo].[Log](
	[LogId]        [int] IDENTITY(1,1) NOT NULL,
	[LogLevel]     [int]               NOT NULL,
	[Created]      [datetime]          NOT NULL,
	[Message]      [nvarchar](max)     NOT NULL,
	[Details]      [nvarchar](max)     NULL,
	[LocationInfo] [nvarchar](max)     NULL,
 CONSTRAINT [PK_Log] PRIMARY KEY CLUSTERED 
(
	[LogId] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) 
)

GO


CREATE TABLE [dbo].[ActivityLog](
	[ActivityLogId] [int] IDENTITY(1,1) NOT NULL,
	[Time]          [datetime]          NOT NULL,
	[Url]           [nvarchar](max)     NOT NULL,
	[Parameters]    [nvarchar](max)     NULL,
	[Detail]        [nvarchar](max)     NULL,
 CONSTRAINT [PK_dbo.ActivityLog] PRIMARY KEY CLUSTERED 
(
	[ActivityLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO


CREATE TABLE [dbo].[ActivityLogEntity](
	[ActivityLogEntityId] [int] IDENTITY(1,1) NOT NULL,
	[ActivityLogId]       [int]               NOT NULL,
	[Key]                 [nvarchar](max)     NOT NULL,
	[Name]                [nvarchar](max)     NULL,
	[Description]         [nvarchar](max)     NULL,
	[Data]                [nvarchar](max)     NOT NULL,
 CONSTRAINT [PK_dbo.ActivityLogEntity] PRIMARY KEY CLUSTERED 
(
	[ActivityLogEntityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

ALTER TABLE [dbo].[ActivityLogEntity]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ActivityLogEntity_dbo.ActivityLog_ActivityLogId] FOREIGN KEY([ActivityLogId])
REFERENCES [dbo].[ActivityLog] ([ActivityLogId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[ActivityLogEntity] CHECK CONSTRAINT [FK_dbo.ActivityLogEntity_dbo.ActivityLog_ActivityLogId]
GO


CREATE TABLE [dbo].[Provider](
    [ProviderId]   [int]            NOT NULL,
    [CreationDate] [datetime]       NOT NULL default(getdate()),
    [SyncTime]     [datetime]       NULL,
    [Name]         [nvarchar](1000) NOT NULL,
    [IsEnabled]    [bit]            NOT NULL,
    [Language]     [nvarchar](10)   NOT NULL,
    [Mode]         int              NOT NULL,
    [TimezoneId]   nvarchar(100)    NULL,
 CONSTRAINT [PK_dbo.Provider] PRIMARY KEY CLUSTERED 
(
    [ProviderId] ASC 
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

-------------- create table ProviderUserContext --------------
CREATE TABLE [dbo].[ProviderUserContext](
    [Id]         [int] IDENTITY(1,1) NOT NULL,
    [ProviderId] [int]               NOT NULL,
    [Username]   [nvarchar](255)     NOT NULL,
 CONSTRAINT [PK_dbo.ProviderUserContext] PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO

-------------- create table Role --------------

CREATE TABLE [dbo].[Role](
    [RoleId]      [nvarchar](100) NOT NULL,
    [Description] [nvarchar](500) NULL,
 CONSTRAINT [PK_dbo.Role] PRIMARY KEY CLUSTERED 
(
    [RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO

-------------- create table Group --------------

CREATE TABLE [dbo].[Group](
    [GroupId]     [nvarchar](100) NOT NULL,
    [IsPublic]    [bit]           NULL,
    [Description] [nvarchar](500) NULL,
 CONSTRAINT [PK_dbo.Group] PRIMARY KEY CLUSTERED 
(
    [GroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO


-------------- create table UserRole --------------

CREATE TABLE [dbo].[UserRole](
    [Id]       [int] IDENTITY(1,1) NOT NULL,
    [Username] [nvarchar](255)     NOT NULL,
    [RoleId]   [nvarchar](100)     NOT NULL,
    CONSTRAINT [IX_Username_RoleId_UX] 
        UNIQUE ( [Username], [RoleId] ),
    CONSTRAINT [PK_dbo.UserRole] 
        PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO

-------------- create table UserGroup --------------

CREATE TABLE [dbo].[UserGroup](
    [Id]       [int] IDENTITY(1,1) NOT NULL,
    [Username] [nvarchar](255)     NOT NULL,
    [GroupId]  [nvarchar](100)     NOT NULL,
    CONSTRAINT [IX_Username_GroupId_UX] 
        UNIQUE ( [Username], [GroupId] ),
    CONSTRAINT [PK_dbo.UserGroup] 
        PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO

-------------- create table GroupRole --------------

CREATE TABLE [dbo].[GroupRole](
	[Id]       [int] IDENTITY(1,1) NOT NULL,
	[GroupId]  [nvarchar](100)     NOT NULL,
	[RoleId]   [nvarchar](100)     NOT NULL,
 CONSTRAINT [PK_dbo.GroupRole] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

ALTER TABLE [dbo].[GroupRole]  WITH CHECK ADD  CONSTRAINT [FK_dbo.GroupRole_dbo.Group_Id_Group] FOREIGN KEY([GroupId])
REFERENCES [dbo].[Group] ([GroupId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[GroupRole] CHECK CONSTRAINT [FK_dbo.GroupRole_dbo.Group_Id_Group]
GO

ALTER TABLE [dbo].[GroupRole]  WITH CHECK ADD  CONSTRAINT [FK_dbo.GroupRole_dbo.Role_Id_Role] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Role] ([RoleId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[GroupRole] CHECK CONSTRAINT [FK_dbo.GroupRole_dbo.Role_Id_Role]
GO


INSERT INTO [dbo].[Group] ([GroupId],[Description],[IsPublic]) 
VALUES ('administrators', N'Администратор', 0),
       ('support', N'Служба поддержки головного офиса', 0),
       ('support-local', N'Локальная служба тех.поддержки', 0),
       ('users', N'Пользователь продукта (отельеры)', 1)

INSERT INTO [dbo].[Role]  ([RoleId],[Description]) 
VALUES ('access-provider-settings', N'Доступ к страницам с настройками провайдера'),
       ('access-system-settings', N'Доступ к страницам с системными настройками')

INSERT INTO [dbo].[GroupRole] ([GroupId],[RoleId]) 
VALUES ('administrators','access-provider-settings'),
       ('administrators','access-system-settings'),
       ('support','access-provider-settings'),
       ('support-local','access-provider-settings'),
       ('users','access-provider-settings')


-------------- create table ProviderObjectGroup with cluster index --------------

CREATE TABLE [dbo].[ProviderObjectGroup](
        [ProviderObjectGroupId] [int] IDENTITY(1,1) NOT NULL,
        [ProviderId] [int] NOT NULL,
        [ObjectGroup] [nvarchar](255) NOT NULL,
        CONSTRAINT [PK_ProviderObjectGroup] 
            PRIMARY KEY CLUSTERED ( [ProviderObjectGroupId]),
    )

CREATE NONCLUSTERED INDEX [IX_ProviderObjectGroup_ProviderId] ON [dbo].[ProviderObjectGroup] ( [ProviderId] )
