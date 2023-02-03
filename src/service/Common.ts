export const baseUrl = "https://auction-production.up.railway.app/";

export function bearer() {
    return {
        headers: {
            'Authorization': 'Bearer '+sessionStorage.getItem("token")
        }
    }
}