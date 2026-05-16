export async function getCodeChefData(handle) {
  try {
    const res = await fetch(
      `https://codechef-api.vercel.app/handle/${handle}`
    );
    const data = await res.json();

    if (!data || data.success === false) {
      return { success: false, error: 'User not found' };
    }

    return {
      success: true,
      data: {
        handle: data.name ?? handle,
        currentRating: data.currentRating ?? 0,
        highestRating: data.highestRating ?? 0,
        stars: data.stars ?? '1★',
        countryRank: data.countryRank ?? 'N/A',
      }
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}