import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/axios.js';

export const useEventStore = defineStore('eventStore', () => {
    const isAuth = ref(false);
    const isLoading = ref(false);
    const notifications = ref([]);
    const modalVisible = ref('close');
    const modalType = ref(null);
    const events = ref([]);
    const event = ref({});
    const users = ref([]);
    const user = ref({});

    const checkAuth = () => {
        const token = localStorage.getItem('access_token');
        isAuth.value = !!token;
        if (!token) {
            modalType.value = 'auth';
            modalVisible.value = 'open';
        }
    }

    const toggleModal = (type) => {
        if (!isAuth.value) return;
        modalVisible.value = type;
        // type === 'open' ? modalVisible.value = 'open' : modalVisible.value = false;
    }

    const handleNotifications = (notification) => {
        notifications.value.push(notification);
        setTimeout(() => {
            const idx = notifications.value.indexOf(notification);
            if (idx !== -1) notifications.value.splice(idx, 1);
        }, 3000);
    }

    const getHeaders = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    });

    const getParams = () => (
        {
            'page': null,
            'per_page': null,
            'search': null,
        }
    )

    const fetchData = async (mode, type, endpoint, payload) => {
        // modes: get/post/put/del etc
        // types: auth/events/participiants etc
        console.log('called', mode, type, endpoint, payload);

        const params = getParams();
        const headers = getHeaders();
        isLoading.value = true;

        // const typeValidation = (type) => {
        //     switch (type) {
        //         case 'auth':
        //             return '';
        //         case 'stelas':
        //             return 'access/';
        //         default:
        //             return `banks/${activeBank.value.id}/`;
        //     }
        // }

        try {
            let response;
            switch (mode) {
                case 'get':
                    response = await axiosInstance.get(
                        endpoint ? `/${type}/${endpoint}` : `/${type}`,
                        { headers, params }
                    )
                    break;
                case 'post':
                    response = await axiosInstance.post(
                        endpoint ? `/${type}/${endpoint}` : `/${type}`,
                        payload,
                        { headers, params }
                    )
                    break;
            }
            console.log(response);
            if (response.status === 200 || response.status === 201) {
                switch (type) {
                    case 'auth':
                        isAuth.value = true;
                        localStorage.setItem('access_token', response.data.access_token);
                        localStorage.setItem('userid', response.data.user.id);
                        localStorage.setItem('login', response.data.user.login);
                        localStorage.setItem('avatar', response.data.user.avatar);
                        break;
                    case 'events':
                        if (endpoint) {
                            event.value = response.data;
                        } else {
                            events.value = response.data.data;
                        }
                        break;
                    case 'users':
                        if (endpoint) {
                            user.value = response.data;
                        } else {
                            users.value = response.data.data;
                        }
                        break;
                    default:
                        break;
                }
            }
        } catch (err) {
            const errors = err.response?.data?.errors;
            // Object.values(errors).flat().forEach(error => {
            //     handleNotifications({ notification: error, type: 'error' });
            // });
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isAuth,
        isLoading,
        notifications,
        modalVisible,
        modalType,
        events,
        event,
        users,
        user,

        checkAuth,
        fetchData,
        toggleModal,
    };
});