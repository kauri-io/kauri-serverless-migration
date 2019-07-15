/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from './../../__generated__/globalTypes'

// ====================================================
// GraphQL query operation: HomePageV2
// ====================================================

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_AbstractComponent {
    __typename:
        | 'AbstractComponent'
        | 'ResourceContentComponent'
        | 'ResourceIdContentComponent'
        | 'StaticContentComponent'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Categories_content {
    __typename: 'StaticContentElementDTO'
    name: string 
    description: string 
    image: string 
    link: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Categories {
    __typename: 'Categories'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Categories_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_PublicUserDTO {
    __typename:
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resourcesId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections {
    __typename: 'SectionDTO'
    id: string 
    name: string 
    description: string 
    resourcesId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resourcesId )[]
        
    resources:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    type: ResourceTypeInput 
    id: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
    name: string 
    description: string 
    tags: (string )[] 
    background: string 
    dateUpdated: any 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner 
    sections:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections )[]
        
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_voteResult {
    __typename: 'VoteResultDTO'
    sum: number 
    count: any 
    hasVoted: boolean 
    quantity: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_author {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO {
    __typename: 'ArticleDTO'
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_resourceIdentifier 
    description: string 
    id: string 
    version: number 
    title: string 
    content: string 
    authorId: string 
    dateCreated: any 
    datePublished: any 
    attributes: any 
    contentHash: string 
    checkpoint: string 
    tags: (string )[] 
    voteResult: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_voteResult 
    author: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_author 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner 
    updateComment: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_creator {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approvedId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_pendingId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CollectionDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    dateCreated: any 
    dateUpdated: any 
    creatorId: string 
    creator: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_creator 
    name: string 
    description: string 
    website: string 
    avatar: string 
    social: any 
    tags: (string )[] 
    attributes: any 
    approvedId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approvedId )[]
        
    pendingId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_pendingId )[]
        
    approved:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved )[]
        
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content {
    __typename: 'ResourceIdentifier'
    resource: HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content_resource 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Featured {
    __typename: 'Featured'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Featured_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Actions_content {
    __typename: 'StaticContentElementDTO'
    name: string 
    link: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Actions {
    __typename: 'Actions'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Actions_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_TopTags_content {
    __typename: 'StaticContentElementDTO'
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_TopTags {
    __typename: 'TopTags'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_TopTags_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_TopContributors_content_user {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_TopContributors_content {
    __typename: 'ResourceIdentifier'
    user: HomePageV2_getLatestHomepageDescriptor_rows_main_TopContributors_content_user 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_TopContributors {
    __typename: 'TopContributors'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_TopContributors_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_PublicUserDTO {
    __typename:
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resourcesId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections {
    __typename: 'SectionDTO'
    id: string 
    name: string 
    description: string 
    resourcesId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resourcesId )[]
        
    resources:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    type: ResourceTypeInput 
    id: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
    name: string 
    description: string 
    tags: (string )[] 
    background: string 
    dateUpdated: any 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner 
    sections:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections )[]
        
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_voteResult {
    __typename: 'VoteResultDTO'
    sum: number 
    count: any 
    hasVoted: boolean 
    quantity: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_author {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO {
    __typename: 'ArticleDTO'
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_resourceIdentifier 
    description: string 
    id: string 
    version: number 
    title: string 
    content: string 
    authorId: string 
    dateCreated: any 
    datePublished: any 
    attributes: any 
    contentHash: string 
    checkpoint: string 
    tags: (string )[] 
    voteResult: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_voteResult 
    author: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_author 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner 
    updateComment: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_creator {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approvedId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_pendingId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CollectionDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    dateCreated: any 
    dateUpdated: any 
    creatorId: string 
    creator: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_creator 
    name: string 
    description: string 
    website: string 
    avatar: string 
    social: any 
    tags: (string )[] 
    attributes: any 
    approvedId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approvedId )[]
        
    pendingId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_pendingId )[]
        
    approved:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved )[]
        
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content {
    __typename: 'ResourceIdentifier'
    resource: HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content_resource 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Promo {
    __typename: 'Promo'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_Promo_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_PublicUserDTO {
    __typename:
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resourcesId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections {
    __typename: 'SectionDTO'
    id: string 
    name: string 
    description: string 
    resourcesId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resourcesId )[]
        
    resources:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    type: ResourceTypeInput 
    id: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
    name: string 
    description: string 
    tags: (string )[] 
    background: string 
    dateUpdated: any 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner 
    sections:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections )[]
        
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_voteResult {
    __typename: 'VoteResultDTO'
    sum: number 
    count: any 
    hasVoted: boolean 
    quantity: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_author {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO {
    __typename: 'ArticleDTO'
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_resourceIdentifier 
    description: string 
    id: string 
    version: number 
    title: string 
    content: string 
    authorId: string 
    dateCreated: any 
    datePublished: any 
    attributes: any 
    contentHash: string 
    checkpoint: string 
    tags: (string )[] 
    voteResult: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_voteResult 
    author: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_author 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner 
    updateComment: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_creator {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approvedId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_pendingId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CollectionDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    dateCreated: any 
    dateUpdated: any 
    creatorId: string 
    creator: HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_creator 
    name: string 
    description: string 
    website: string 
    avatar: string 
    social: any 
    tags: (string )[] 
    attributes: any 
    approvedId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approvedId )[]
        
    pendingId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_pendingId )[]
        
    approved:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved )[]
        
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent {
    __typename: 'LatestContent'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Newsletter {
    __typename: 'Newsletter'
    type: string 
    properties: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_main_Import {
    __typename: 'Import'
    type: string 
    properties: any 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_main =
    | HomePageV2_getLatestHomepageDescriptor_rows_main_AbstractComponent
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Categories
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Featured
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Actions
    | HomePageV2_getLatestHomepageDescriptor_rows_main_TopTags
    | HomePageV2_getLatestHomepageDescriptor_rows_main_TopContributors
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Promo
    | HomePageV2_getLatestHomepageDescriptor_rows_main_LatestContent
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Newsletter
    | HomePageV2_getLatestHomepageDescriptor_rows_main_Import

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_AbstractComponent {
    __typename:
        | 'AbstractComponent'
        | 'ResourceContentComponent'
        | 'ResourceIdContentComponent'
        | 'StaticContentComponent'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Categories_content {
    __typename: 'StaticContentElementDTO'
    name: string 
    description: string 
    image: string 
    link: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Categories {
    __typename: 'Categories'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Categories_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_PublicUserDTO {
    __typename:
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resourcesId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections {
    __typename: 'SectionDTO'
    id: string 
    name: string 
    description: string 
    resourcesId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resourcesId )[]
        
    resources:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    type: ResourceTypeInput 
    id: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
    name: string 
    description: string 
    tags: (string )[] 
    background: string 
    dateUpdated: any 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner 
    sections:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections )[]
        
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_voteResult {
    __typename: 'VoteResultDTO'
    sum: number 
    count: any 
    hasVoted: boolean 
    quantity: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_author {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO {
    __typename: 'ArticleDTO'
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_resourceIdentifier 
    description: string 
    id: string 
    version: number 
    title: string 
    content: string 
    authorId: string 
    dateCreated: any 
    datePublished: any 
    attributes: any 
    contentHash: string 
    checkpoint: string 
    tags: (string )[] 
    voteResult: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_voteResult 
    author: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_author 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner 
    updateComment: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_creator {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approvedId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_pendingId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CollectionDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    dateCreated: any 
    dateUpdated: any 
    creatorId: string 
    creator: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_creator 
    name: string 
    description: string 
    website: string 
    avatar: string 
    social: any 
    tags: (string )[] 
    attributes: any 
    approvedId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approvedId )[]
        
    pendingId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_pendingId )[]
        
    approved:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved )[]
        
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content {
    __typename: 'ResourceIdentifier'
    resource: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured {
    __typename: 'Featured'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Actions_content {
    __typename: 'StaticContentElementDTO'
    name: string 
    link: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Actions {
    __typename: 'Actions'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Actions_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopTags_content {
    __typename: 'StaticContentElementDTO'
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopTags {
    __typename: 'TopTags'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopTags_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content_user {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content {
    __typename: 'ResourceIdentifier'
    user: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content_user 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopContributors {
    __typename: 'TopContributors'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_PublicUserDTO {
    __typename:
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resourcesId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections {
    __typename: 'SectionDTO'
    id: string 
    name: string 
    description: string 
    resourcesId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resourcesId )[]
        
    resources:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    type: ResourceTypeInput 
    id: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
    name: string 
    description: string 
    tags: (string )[] 
    background: string 
    dateUpdated: any 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner 
    sections:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections )[]
        
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_voteResult {
    __typename: 'VoteResultDTO'
    sum: number 
    count: any 
    hasVoted: boolean 
    quantity: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_author {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO {
    __typename: 'ArticleDTO'
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_resourceIdentifier 
    description: string 
    id: string 
    version: number 
    title: string 
    content: string 
    authorId: string 
    dateCreated: any 
    datePublished: any 
    attributes: any 
    contentHash: string 
    checkpoint: string 
    tags: (string )[] 
    voteResult: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_voteResult 
    author: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_author 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner 
    updateComment: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_creator {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approvedId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_pendingId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CollectionDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    dateCreated: any 
    dateUpdated: any 
    creatorId: string 
    creator: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_creator 
    name: string 
    description: string 
    website: string 
    avatar: string 
    social: any 
    tags: (string )[] 
    attributes: any 
    approvedId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approvedId )[]
        
    pendingId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_pendingId )[]
        
    approved:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved )[]
        
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content {
    __typename: 'ResourceIdentifier'
    resource: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo {
    __typename: 'Promo'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_PublicUserDTO {
    __typename:
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resourcesId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections {
    __typename: 'SectionDTO'
    id: string 
    name: string 
    description: string 
    resourcesId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resourcesId )[]
        
    resources:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    type: ResourceTypeInput 
    id: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
    name: string 
    description: string 
    tags: (string )[] 
    background: string 
    dateUpdated: any 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner 
    sections:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections )[]
        
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_voteResult {
    __typename: 'VoteResultDTO'
    sum: number 
    count: any 
    hasVoted: boolean 
    quantity: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_author {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_ArticleDTO {
    __typename:
        | 'ArticleDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'CollectionDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
    __typename: 'PublicUserDTO'
    id: string 
    name: string 
    username: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    name: string 
    avatar: string 
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO {
    __typename: 'ArticleDTO'
    resourceIdentifier: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_resourceIdentifier 
    description: string 
    id: string 
    version: number 
    title: string 
    content: string 
    authorId: string 
    dateCreated: any 
    datePublished: any 
    attributes: any 
    contentHash: string 
    checkpoint: string 
    tags: (string )[] 
    voteResult: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_voteResult 
    author: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_author 
    owner: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner 
    updateComment: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_creator {
    __typename: 'PublicUserDTO'
    id: string 
    username: string 
    name: string 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approvedId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_pendingId {
    __typename: 'ResourceIdentifier'
    id: string 
    type: ResourceTypeInput 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CommunityDTO {
    __typename:
        | 'CommunityDTO'
        | 'PublicUserDTO'
        | 'CommentDTO'
        | 'CommunityInvitationDTO'
        | 'CommunityMemberDTO'
        | 'TemplateDTO'
        | 'SearchResultDTO'
        | 'UserDTO'
        | 'CuratedListDTO'
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_ArticleDTO {
    __typename: 'ArticleDTO'
    id: string 
    version: number 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CollectionDTO {
    __typename: 'CollectionDTO'
    id: string 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CommunityDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CollectionDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO {
    __typename: 'CommunityDTO'
    id: string 
    dateCreated: any 
    dateUpdated: any 
    creatorId: string 
    creator: HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_creator 
    name: string 
    description: string 
    website: string 
    avatar: string 
    social: any 
    tags: (string )[] 
    attributes: any 
    approvedId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approvedId )[]
        
    pendingId:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_pendingId )[]
        
    approved:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved )[]
        
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_PublicUserDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent {
    __typename: 'LatestContent'
    type: string 
    properties: any 
    content:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Newsletter {
    __typename: 'Newsletter'
    type: string 
    properties: any 
}

export interface HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Import {
    __typename: 'Import'
    type: string 
    properties: any 
}

export type HomePageV2_getLatestHomepageDescriptor_rows_sidebar =
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_AbstractComponent
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Categories
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Featured
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Actions
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopTags
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_TopContributors
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Promo
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_LatestContent
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Newsletter
    | HomePageV2_getLatestHomepageDescriptor_rows_sidebar_Import

export interface HomePageV2_getLatestHomepageDescriptor_rows {
    __typename: 'HomepageRowDTO'
    main: (HomePageV2_getLatestHomepageDescriptor_rows_main )[] 
    sidebar:
        | (HomePageV2_getLatestHomepageDescriptor_rows_sidebar )[]
        
}

export interface HomePageV2_getLatestHomepageDescriptor {
    __typename: 'HomepageDescriptorDTO'
    rows: (HomePageV2_getLatestHomepageDescriptor_rows )[] 
}

export interface HomePageV2 {
    getLatestHomepageDescriptor: HomePageV2_getLatestHomepageDescriptor 
}

export interface HomePageV2Variables {
    populate?: boolean 
}
