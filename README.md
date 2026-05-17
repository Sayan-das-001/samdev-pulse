
# 🚀 samdev-pulse

> A calm, modern GitHub profile dashboard — generated as a single SVG.  
>  
> Drop one image into your README and get live GitHub stats, contribution activity, language breakdowns, and achievement trophies. No widgets. No clutter. It just works.

---

## ⚡ Quick Usage

Add this to your **GitHub profile README** :

```md
![samdev-pulse](https://samdev-pulse.vercel.app/api/profile?username=YOUR_GITHUB_USERNAME)
````
`YOUR_GITHUB_USERNAME` : change this to your github username. <br>
That’s it. Your profile now renders a live dashboard.

### Live Example Preview

![samdev-pulse live preview](https://samdev-pulse.vercel.app/api/profile?username=SamXop123)

---

## 🎨 Customization Examples

### Theme

```md
![samdev-pulse](https://samdev-pulse.vercel.app/api/profile?username=YOUR_GITHUB_USERNAME&theme=tokyonight)
```

Available themes:
`dark` (default), `light`, `dracula`, `nord`, `tokyonight`, `monokai`, `gruvbox`, `solarized`, `catppuccin`, `rose-pine`, `aurora`, `midnight-sunset`

---

### Competitive Programming Stats (Optional)

```md
![samdev-pulse](https://samdev-pulse.vercel.app/api/profile?username=YOUR_GITHUB_USERNAME&leetcode=YOUR_LEETCODE_USERNAME&codeforces=YOUR_CODEFORCES_USERNAME&codechef=YOUR_CODECHEF_USERNAME)
```

Depending on how many platforms you provide:
- **1 platform:** Replaces the default repository stats card.
- **2+ platforms:** Renders a dedicated "Competitive Programming" section at the bottom for a clean layout.
- **0 platforms:** Shows the default repository stats card.

---

### Header Alignment

```md
![samdev-pulse](https://samdev-pulse.vercel.app/api/profile?username=YOUR_GITHUB_USERNAME&align=center)
```

Options: `left` (default), `center`, `right`

---

### Hide Trophies (Optional)

```md
![samdev-pulse](https://samdev-pulse.vercel.app/api/profile?username=YOUR_GITHUB_USERNAME&hide_trophies=true)
```

---

### Full Example

```md
![samdev-pulse](https://samdev-pulse.vercel.app/api/profile?username=SamXop123&theme=tokyonight&align=center&leetcode=fjzzq2002&codeforces=tourist&codechef=tourist)
```

**Preview:**

![samdev-pulse full preview](https://samdev-pulse.vercel.app/api/profile?username=SamXop123&theme=tokyonight&align=center&leetcode=fjzzq2002&codeforces=tourist&codechef=tourist)

---

## Why samdev-pulse?

* Designed as **one cohesive SVG**, not stitched widgets
* Calm, readable visuals that don’t overpower your profile
* Built for developers who care about craft, clarity, and signal over noise

---

## ✨ Features

### 📊 GitHub Activity

* Total contributions (year)
* Pull requests opened
* Issues opened
* Live data via GitHub REST API

### 🔥 Streak Statistics

* Current streak
* Longest streak
* Total contribution days
* Powered by GitHub GraphQL API

### 📈 Contribution Activity Graph

* SVG line chart (last 30 days)
* Auto-scaled Y-axis
* Smooth curves with gradient fill

### 🍩 Top Languages

* Donut chart (top 5 languages)
* Percentage-based slices
* Calculated from public repositories

### 💻 Competitive Programming (Optional)

* **LeetCode**: Total problems solved, difficulty breakdown, contest rating.
* **Codeforces**: Current rating, max rating, rank.
* **CodeChef**: Current rating, max rating, stars.
* **Adaptive Layout**: Automatically organizes 1 or multiple platform stats cleanly.

---

## 🏆 Achievement Trophies

A visual trophy system highlighting GitHub milestones:

| Trophy           | Description         |
| ---------------- | ------------------- |
| 💪 Commits       | Total contributions |
| 🔀 Pull Requests | PRs opened          |
| 👁️ Reviews       | PR reviews          |
| 🐛 Issues        | Issues opened       |
| 📦 Repositories  | Public repos        |
| ⭐ Stars          | Total stars         |
| 👥 Followers     | GitHub followers    |

<details>
<summary>📊 Trophy tier requirements</summary>

* 🥉 Bronze: Entry level (1+)
* 🥈 Silver: 100+ (500+ for stars)
* 🥇 Gold: 500+ (1000+ for stars)
* 💎 Diamond: 1000+ (5000+ for stars)

</details>

---

## ⚙️ Query Parameters

| Parameter  | Type           | Default     | Description                  |
| ---------- | -------------- |-------------| ---------------------------- |
| `username` | string         | `SamXop123` | GitHub username              |
| `theme`    | string         | `dark`      | Visual theme                 |
| `leetcode` | string / false | –           | LeetCode username            |
| `codeforces` | string / false | –           | Codeforces username          |
| `codechef`   | string / false | –           | CodeChef username            |
| `align`    | string         | `left`      | Header alignment             |
| `hide_trophies` | boolean   | `false`     | Hide the achievements trophies row |

---

## 🛠️ Local Development

### Prerequisites

* Node.js 18+
* GitHub Personal Access Token

### Setup

```bash
git clone https://github.com/SamXop123/samdev-pulse.git
cd samdev-pulse
npm install
```

### Environment Variables

```env
GITHUB_TOKEN=your_github_personal_access_token
DEFAULT_USERNAME=SamXop123
PORT=3000
NODE_ENV=development
```

### Run

```bash
npm run dev
```

Visit:

```
http://localhost:3000/api/profile?username=SamXop123
```

---

## 🔍 API

### `GET /api/profile`

Returns an SVG dashboard.

* Content-Type: `image/svg+xml`
* Cache-Control: `public, max-age=1800`

### `GET /health`

Health check endpoint.

---

## 📁 Project Structure

```
src/
├── routes/        # API routes
├── services/      # GitHub & LeetCode APIs
├── renderers/     # SVG layout & charts
├── themes/        # Theme definitions
└── utils/         # Caching & helpers
```


---

## 🔒 Usage & privacy

samdev-pulse logs basic, non-sensitive usage information (such as the github username passed to the api) for monitoring and improving the service.

no personal data, authentication details, or private information is collected.


---

## 🤝 Contributing

Contributions are welcome.
Please see `CONTRIBUTING.md` for guidelines.

Ideas:

* More themes
* New trophy categories
* Animated SVG elements
* CI & tests

---

## 📝 License

MIT © [SamXop123](https://github.com/SamXop123)

---

## ⭐ Support

If this helped you, consider giving the repo a ⭐
It helps more developers discover the project.


---
