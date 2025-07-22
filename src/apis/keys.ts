const queryKeys = Object.freeze({
  academy: {
    list: () => ["academy", "list"] as const,
    detail: (academyId: string) => ["academy", "detail", academyId] as const,
  },
});

export default queryKeys;
