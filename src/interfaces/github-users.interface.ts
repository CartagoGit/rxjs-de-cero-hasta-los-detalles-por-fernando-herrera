export interface GithubUsersResponse {
	incomplete_results: boolean;
	items: GithubUsersItemResponse[];
	total_count: number;
}

export interface GithubUsersItemResponse {
	avatar_url: string;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	score: number;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: Type;
	url: string;
}

export enum Type {
	Organization = "Organization",
	User = "User",
}
