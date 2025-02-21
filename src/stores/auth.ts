import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

interface User {
  name: string;
  email: string;
  token: string;
}

export const useAuthStore = create(
  persist(
    devtools(
      combine(
        {
          user: null as null | User,
          isSignin: false,
        },
        (set) => ({
          signIn: (user: User) =>
            set({
              user,
              isSignin: !!user,
            }),
          signOut: () => set((s) => s),
        })
      )
    ),
    { name: 'store/auth' }
  )
);

useAuthStore.subscribe(({ isSignin }) => {
  console.log(isSignin);
});
