import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/axios.js';

export const useEventStore = defineStore('eventStore', () => {
    const isAuth = ref(false);
    const isLoading = ref(false);
    const errors = ref([]);
    const modalVisible = ref(true);
    const modalType = ref(null);
    const friendsEvents = ref([]);
    const myEvents = ref([]);
    const user = ref({});

    const toggleModal = (type) => {
        type === 'open' ? modalVisible.value = true : modalVisible.value = false;
    }

    const getHeaders = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    });

    const getParams = () => (
        {
            'page': 0,
            'per_page': 0,
            'search': '',
        }
    )

    const fetchData = async (mode, type, payload) => {
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
                    response = await axiosInstance.get(`/${type}/${endpoint}`, { headers, params })
                    break;
            }
            console.log(response);
            // if (response.status === 200) {

            // }
        } catch (err) {
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isAuth,
        isLoading,
        errors,
        modalVisible,
        modalType,
        friendsEvents,
        myEvents,
        user,

        toggleModal,
    };
});