import App from '@/App.vue';

export default {
    title: 'Archimap/MainWindow',
    component: App,
    tags: ['autodocs'],
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: { App },
        template: '<App />',
    }),

};

export const Primary = {};
