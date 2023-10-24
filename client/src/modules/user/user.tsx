import { useSessionStore } from "../auth/session-store";

export const User = () => {
    const { currentUser } = useSessionStore();
    console.log('currentUser route', currentUser);

    return (
        <div>
            <p>{currentUser?.id}</p>
            <p>{currentUser?.email}</p>
        </div>
    );
};
