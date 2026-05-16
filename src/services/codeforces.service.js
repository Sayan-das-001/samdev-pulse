export async function getCodeforcesData(handle) {
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${handle}`
    );
    const data = await res.json();

    if (data.status !== 'OK') {
      return { success: false, error: 'User not found' };
    }

    const user = data.result[0];
    return {
      success: true,
      data: {
        handle: user.handle,
        rating: user.rating ?? 0,
        maxRating: user.maxRating ?? 0,
        rank: user.rank ?? 'unrated',
        maxRank: user.maxRank ?? 'unrated',
      }
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}