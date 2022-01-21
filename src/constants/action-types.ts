export const ActionType = {
  LOAD_PRICE_RANGE: 'filters/LoadPriceRange',
  LOAD_GUITAR_TYPES: 'filters/LoadGuitarTypes',
  REMOVE_GUITAR_TYPES: 'filters/RemoveGuitarTypes',
  LOAD_GUITAR_STRINGS_COUNT: 'filters/LoadGuitarStringsCount',
  REMOVE_GUITAR_STRINGS_COUNT: 'filters/RemoveGuitarStringsCount',
  LOAD_SORT_TYPE: 'filters/LoadSortType',
  LOAD_SORT_ORDER: 'filters/LoadSortOrder',
  LOAD_GUITARS: 'guitars/LoadGuitars',
  LOAD_CURRENT_GUITAR: 'guitars/LoadCurrentGuitar',
  LOAD_SIMILAR_GUITARS: 'guitars/LoadSimilarGuitars',
  LOAD_DISPLAYED_GUITARS: 'guitars/LoadDisplayedGuitars',
  LOAD_CURRENT_PAGE: 'pagination/LoadCurrentPage',
  LOAD_TOTAL_PAGES: 'pagination/LoadTotalPages',
  LOAD_ERROR_STATUS: 'guitars/LoadErrorStatus',
  LOAD_FETCH_STATUS: 'pagination/LoadFetchStatus',
  LOAD_NEW_COMMENT_STATUS: 'guitars/LoadNewCommentStatus',
  LOAD_NEW_COMMENT: 'guitars/LoadNewComment',
} as const;
