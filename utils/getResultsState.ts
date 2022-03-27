import algoliasearch from 'algoliasearch/lite'
import type { SearchState } from 'react-instantsearch-core'
import type { InstantSearchProps } from 'react-instantsearch-dom'
import { findResultsState } from 'react-instantsearch-dom/server'

export type GetResultsStateParams = {
  component: React.ComponentType
  searchState: SearchState
  appId: string
  searchApiKey: string
  indexName: string
}

export async function getResultsState({
  component,
  searchState,
  appId,
  searchApiKey,
  indexName,
}: GetResultsStateParams): Promise<InstantSearchProps['resultsState']> {
  // 'useSearchClient' hook is not used here as this function runs on server-side only
  const searchClient = algoliasearch(appId, searchApiKey)

  // We need two 'findResultsState' for 'DynamicWidgets' to work properly
  const firstResultsState = await findResultsState(component, {
    searchClient,
    indexName,
    searchState,
  })

  let resultsState = await findResultsState(component, {
    searchClient,
    indexName,
    searchState,
    resultsState: firstResultsState,
  })

  // Strips down unserializable values so Next.js doesn't show an error
  resultsState = JSON.parse(JSON.stringify(resultsState))

  return resultsState
}
