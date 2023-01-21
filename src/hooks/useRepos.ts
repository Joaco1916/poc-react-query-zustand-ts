import githubApi from "../api/github"
import { QueryFunctionContext, useQuery } from "@tanstack/react-query"
import { Repository } from "./types"

async function fetchRepos ( ctx: QueryFunctionContext ) {
    const [ _, githubUser ] = ctx.queryKey
    const {data} = await githubApi.get<Repository[]>(`/users/${githubUser}/repos`)
    return data
}

export function useFetchRepositories( githubUser: string = 'joaco1916') {
    return useQuery(['repos', githubUser], fetchRepos)
}