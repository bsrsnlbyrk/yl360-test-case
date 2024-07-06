export async function fetchBooks () {
    try {
        const res = await fetch("https://dev-test.360y.co/books");

        if (!res.ok) throw new Error("Books cannot be fetched");

        const jsonResponse = await res.json();

        return jsonResponse;

    } catch (err: any) {
        throw new Error(err.message);
    }
}
