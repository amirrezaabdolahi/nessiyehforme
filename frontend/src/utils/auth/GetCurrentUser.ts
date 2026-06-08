
import { authenticatedFetch } from "@/lib/authenticatedFetch";

export async function getCurrentUser() {
    try {
        const result = await authenticatedFetch(
            "accounts/profile/"
        );

        if (
            !result ||
            !result.response.ok
        ) {
            return null;
        }

        return await result.response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}