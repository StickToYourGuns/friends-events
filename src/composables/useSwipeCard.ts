import { ref, onMounted, onUnmounted, type Ref } from 'vue'

type Direction = "left" | "right" | "up" | null

export function useSwipeCard(el: Ref<HTMLElement | null>) {
    const x = ref(0)
    const y = ref(0)
    const rotation = ref(0)
    const direction = ref<Direction>(null)

    const color = ref('')
    const opacity = ref(.5)

    let startX = 0
    let startY = 0
    let dragging = false

    const threshold = 120 // порог свайпа

    const start = (e: TouchEvent | MouseEvent) => {
        dragging = true
        const point = getPoint(e)
        startX = point.x - x.value
        startY = point.y - y.value
        console.log(`start dragging. x: ${startX} ,y: ${startY}`);
    }

    const move = (e: TouchEvent | MouseEvent) => {
        if (!dragging) return
        const point = getPoint(e)

        let tempX = point.x - startX
        let tempY = startY - point.y

        if (tempY > 30 && (tempX > -30 && tempX < 30)) {
            x.value = 0;
            y.value = point.y - startY
            console.log('превалирует вертикаль', y.value);
            color.value = '#5780D2';
            opacity.value = (y.value * -1 - 30) * 0.005;
            direction.value = 'up';
        } else {
            x.value = point.x - startX;
            y.value = 0;
            if (tempY < 30 && (tempX > -30 && tempX < 30)) {
                console.log('Нейтральное положение')
            }
            if (x.value > 30) {
                color.value = '#3B9C3E';
                opacity.value = (x.value - 30) * 0.005;
                console.log('превалирует право')
                direction.value = 'right';
            }
            if (x.value < -30) {
                color.value = '#b1002f';
                opacity.value = (x.value * -1 - 30) * 0.005;
                console.log('превалирует лево')
                direction.value = 'left';
            }
        }

        rotation.value = x.value * 0.1
        // console.log(`dragging. x: ${x.value} ,y: ${y.value}`);
    }

    const end = () => {
        console.log('end dragging');
        if (!dragging) return
        dragging = false

        // const absX = Math.abs(x.value)
        // const absY = Math.abs(y.value)

        // if (absX > threshold || absY > threshold) {
        //     if (absX > absY) {
        //         direction.value = x.value > 0 ? "right" : "left"
        //     } else {
        //         direction.value = y.value < 0 ? "up" : "left"
        //     }
        //     swipeOff(direction.value!)
        //     return
        // }

        reset()
    }

    const reset = () => {
        x.value = 0
        y.value = 0
        rotation.value = 0
        opacity.value = 0
        direction.value = null
    }

    const swipeOff = (direction: Direction) => {
        switch (direction) {
            case "right":
                console.log('Выбрали право');
                break
            case "left":
                console.log('Выбрали лево');
                break
            case "up":
                console.log('Выбрали верх');
                break
        }
    }

    const getPoint = (e: TouchEvent | MouseEvent) => {
        if (e instanceof TouchEvent) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY }
        }
        return { x: e.clientX, y: e.clientY }
    }

    onMounted(() => {
        window.addEventListener("mousedown", start)
        window.addEventListener("mousemove", move)
        window.addEventListener("mouseup", end)

        window.addEventListener("touchstart", start)
        window.addEventListener("touchmove", move)
        window.addEventListener("touchend", end)
    })

    onUnmounted(() => {
        window.removeEventListener("mousedown", start)
        window.removeEventListener("mousemove", move)
        window.removeEventListener("mouseup", end)

        window.removeEventListener("touchstart", start)
        window.removeEventListener("touchmove", move)
        window.removeEventListener("touchend", end)
    })

    return {
        x,
        y,
        rotation,
        direction,
        color,
        opacity,
        reset,
        swipeOff
    }
}
