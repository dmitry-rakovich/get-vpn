import { UserResponse } from "./types";

export async function getNames(): Promise<string[]> {
    const res = await fetch('https://randomuser.me/api/?results=3');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: UserResponse = await res.json();
    return data.results.map(user => `${user.name.first} ${user.name.last}`);
}