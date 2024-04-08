export default function(instance: any) {
    return {
        refresh() {
            return instance.get('auth');
        },
        login(payload: {login: string, password: string}) {
            return instance.post('auth', payload);
        },
        logout() {
            return instance.delete('auth');
        },
    }
}