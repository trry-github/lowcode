const useSettingsStore = defineStore(
  // 唯一ID
  'settings',
  {
    state: () => ({
      title: ''
    }),
    actions: {
      // 设置网页标题
      setTitle(title: string) {
        this.title = title
      }
    }
  }
)

export default useSettingsStore
