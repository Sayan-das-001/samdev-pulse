export function renderCPSection({ x, y, width, leetcode, codeforces, codechef }) {
  const platforms = [];

  if (leetcode) {
    platforms.push({
      title: 'LeetCode',
      lines: [
        `Solved: ${leetcode.totalSolved ?? 0}`,
        `E:${leetcode.easySolved} M:${leetcode.mediumSolved} H:${leetcode.hardSolved}`,
        `Rating: ${leetcode.contestRating ?? leetcode.ranking ?? 'N/A'}`,
      ]
    });
  }

  if (codeforces) {
    platforms.push({
      title: 'Codeforces',
      lines: [
        `Rating: ${codeforces.rating}`,
        `Rank: ${codeforces.rank}`,
        `Max: ${codeforces.maxRating}`,
      ]
    });
  }

  if (codechef) {
    platforms.push({
      title: 'CodeChef',
      lines: [
        `Rating: ${codechef.currentRating} ${codechef.stars}`,
        `Highest: ${codechef.highestRating}`,
        `Country Rank: ${codechef.countryRank}`,
      ]
    });
  }

  if (platforms.length === 0) return '';

  const colWidth = Math.floor(width / platforms.length);

  const cols = platforms.map((p, i) => `
    <g transform="translate(${i * colWidth}, 0)">
      <text
        font-family="'Segoe UI', sans-serif"
        font-size="10"
        font-weight="700"
        fill="#58a6ff"
        x="0" y="0"
        letter-spacing="1">
        ${p.title.toUpperCase()}
      </text>
      ${p.lines.map((line, j) => `
        <text
          font-family="'Segoe UI', sans-serif"
          font-size="11"
          fill="#c9d1d9"
          x="0"
          y="${16 + j * 16}">
          ${line}
        </text>
      `).join('')}
    </g>
  `).join('');

  return `
    <g transform="translate(${x}, ${y})">
      <text
        font-family="'Segoe UI', sans-serif"
        font-size="10"
        font-weight="600"
        fill="#8b949e"
        x="0" y="0"
        letter-spacing="2">
        COMPETITIVE PROGRAMMING
      </text>
      <line
        x1="0" y1="8"
        x2="${width}" y2="8"
        stroke="#30363d"
        stroke-width="0.5"/>
      <g transform="translate(0, 20)">
        ${cols}
      </g>
    </g>
  `;
}