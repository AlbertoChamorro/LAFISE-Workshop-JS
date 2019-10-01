export default function CapitalizeFilter() {
    return (input) => {
        if (!input) console.error(`Field input for capitalize is invalid`)
        return input.charAt(0).toUpperCase() + input.slice(1)
    }
}