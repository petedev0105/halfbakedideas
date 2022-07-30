//categories 

const categoryOptions = [
        { value: 'all', label: 'all' },

    { value: 'social', label: 'social' },
    { value: 'tech', label: 'tech' },
    { value: 'productivity', label: 'productivity' },
    { value: 'education', label: 'education' },
    { value: 'health', label: 'health' },
    { value: 'tool', label: 'tool' },
    { value: 'fun', label: 'fun' },
    { value: 'entertainment', label: 'entertainment' },
    { value: 'extension', label: 'extension' },
    { value: 'business', label: 'business' },
    { value: 'design', label: 'design' },
    { value: 'others', label: 'others' },

];


//custom styles for react-select
const style = {
    control: base => ({
        ...base,
        border: 0,
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        padding: 5,
        color: '#e5e5e5',
    }),

    menuList: (base) => ({
        ...base,

        "::-webkit-scrollbar": {
            width: "4px",
            height: "0px",
        },
        "::-webkit-scrollbar-track": {
            background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#cbd5e1"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#94a3b8"
        }
    })
};
const theme = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: '#fce7f3',
        primary: '#334155',
    },
})
export { categoryOptions, style, theme }