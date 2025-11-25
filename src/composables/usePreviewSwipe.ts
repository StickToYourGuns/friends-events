import { ref, watch, onMounted, onUnmounted, computed } from 'vue';

export function usePreviewSwipe() {
    const scroll = ref(0);
    const previewMinimized = ref(false);
    const previewHeight = ref('105dvh');
    // const transition = ref(true);
    const transitionSpeed = ref('1s ease')
    const startY = ref(0);
    const valueToMinimize = 300;
    let valid = false;
    const contentHeight = computed(() => `calc(100dvh - ${previewHeight.value} + 40px)`);


    let isScrolling = ref(false);

    const handleTouchStart = (event: TouchEvent) => {
        const touch = event.touches?.[0];
        if (!touch) return;

        let target = event.target as HTMLElement | null;

        while (target) {
            if (target.classList.contains('content__hr-container')) {
                valid = true;
                isScrolling.value = true;
                break;
            }
            target = target.parentElement;
        }

        if (!valid) return;

        startY.value = touch.clientY;
        // transition.value = false;
        transitionSpeed.value = 'none'
        scroll.value = 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
        if (!valid) return;
        const touch = event.touches?.[0];
        if (!touch) return;
        const currentY = touch.clientY;
        scroll.value = startY.value - currentY;
    };

    const handleTouchEnd = () => {
        isScrolling.value = false;
        valid = false;
        if (
            (!previewMinimized.value && scroll.value > 0 && scroll.value < valueToMinimize / 2) ||
            (previewMinimized.value && scroll.value <= -(valueToMinimize / 2)) ||
            (!previewMinimized.value && scroll.value < 0)
        ) {
            previewHeight.value = '50dvh';
            previewMinimized.value = false;
        } else if (
            (!previewMinimized.value && scroll.value >= valueToMinimize / 2) ||
            (previewMinimized.value && scroll.value < 0 && scroll.value > -(valueToMinimize / 2))
        ) {
            previewHeight.value = '20dvh';
            previewMinimized.value = true;
        }
        // transition.value = true;
        transitionSpeed.value = '.3s ease'

        setTimeout(() => (scroll.value = 0), 150);
    };

    watch(scroll, (newScroll) => {
        if (!previewMinimized.value && newScroll > -50 * (window.innerHeight / 100)) {
            previewHeight.value = `calc(50dvh - ${newScroll}px)`;
            
        } else if (previewMinimized.value && newScroll < 0) {
            previewHeight.value = `calc(20dvh - ${newScroll}px)`;
        }
    });

    watch(previewMinimized, (isMinimized) => {
        if (!isMinimized) {
            document.body.classList.add('no-scroll');
        } else {
            setTimeout(() => {
                document.body.classList.remove('no-scroll');
            }, 100);
        }
    });

    onMounted(() => {
        setTimeout(() => {
            previewHeight.value = '50dvh'
        }, 100);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        document.body.classList.add('no-scroll');
    });

    onUnmounted(() => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    });

    return {
        previewHeight,
        contentHeight,
        // transition,
        transitionSpeed,
        previewMinimized,
        isScrolling,
    };
}
