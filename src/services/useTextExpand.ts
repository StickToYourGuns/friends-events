import { ref, nextTick, onMounted } from 'vue'

export function useTextExpand(descriptionRef: any) {
  const isLongText = ref(false)
  const isExpandedText = ref(false)
  const expandedHeight = ref('')

  const expandText = (action: 'toggle' | null) => {
    if (action) {
      isExpandedText.value = !isExpandedText.value
    } else {
      isExpandedText.value = true
    }
  }

  onMounted(async () => {
    await nextTick()
    const el = descriptionRef.value
    if (el) {
      const height = el.offsetHeight
      if (height > 58) isLongText.value = true
      expandedHeight.value = height + 'px'
    }
  })

  return {
    isLongText,
    isExpandedText,
    expandedHeight,
    expandText,
  }
}
