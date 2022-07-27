import * as SecureStore from 'expo-secure-store';


export const secureStore = {
    set: async (key: string, value: string): Promise<boolean> => {
        try {
            await SecureStore.setItemAsync(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.log("Something went wrong. -> " + key)
            console.log(error)
            return false;
        }
    },
    get: async (key: string) => {
        try {
            let result = await SecureStore.getItemAsync(key);

            if (result) return JSON.parse(result);
            else {
                console.log("No values stored under that key.")
                return null;
            }
        }
        catch (e) {
            console.log("getItemAsync error");
            console.log(e);
        }
    },
    delete: async (key: string) => {
        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.log("Something went wrong. -> " + key)
            console.log(error)
        }
    },
    clear: async () => {
        try {
            await secureStore.delete("user")
            await secureStore.delete("session")

            console.log("cleared.")
        } catch (error) {
            console.log("Something went wrong.")
            console.log(error)
        }
    },
};