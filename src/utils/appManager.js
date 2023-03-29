import { ref } from 'vue'

export default function appManager() {
    let numEmployees = ref(10)
    let age = 58;
    function addToEmployees() {
        numEmployees.value++
    }
    function subtractFromEmployees() {
        numEmployees.value--
    }

    function getMessage() {
        return "Show a list of employees";
    }
    return { numEmployees, addToEmployees, subtractFromEmployees, getMessage, age }
}