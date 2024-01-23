import { ref } from 'vue';

const open = ref(false);
const size = ref('default');

const showDrawer = (val) => {
    size.value = val;
    open.value = true;
};

const onClose = () => {
    open.value = false;
};
  
export function useSildeOver() {
    return { open,size, showDrawer,onClose }
}
