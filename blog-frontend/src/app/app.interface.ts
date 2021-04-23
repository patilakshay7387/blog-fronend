export interface Blog {
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    comments_count: number;
    public_reactions_count: number;
    cover_image: string | null;
    social_image: string | null;
    reading_time_minutes: number;
    tag_list: string[];
    user: User;
    organization: Organization;
}



export interface User {
    name: string;
    username: string;
    github_username: string;
    profile_image_90: string;
    profile_image: string;
}

export interface Organization {
    name: string;
    username: string;

}