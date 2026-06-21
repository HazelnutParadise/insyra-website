<template>
  <div class="version-history-page">
    <section class="vh-hero">
      <div class="container">
        <h1>{{ vh.title }}</h1>
        <p class="vh-description">{{ vh.description }}</p>
        <p class="vh-naming">
          <strong>{{ vh.namingNote.label }}</strong>{{ vh.namingNote.text }}
        </p>
      </div>
    </section>

    <section class="vh-body">
      <div class="container">
        <!-- 目前版本（升上新 minor 後，這張卡的舊版會移入下方 versions） -->
        <div class="vh-current">
          <span class="vh-current-badge">{{ vh.current.label }}</span>
          <h2>{{ vh.current.version }}</h2>
          <p>{{ vh.current.note }}</p>
          <a class="vh-back" :href="vh.current.backHref">
            {{ vh.current.backText }}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <!-- 歷史版本（每個 minor 一張卡） -->
        <article v-for="entry in vh.versions" :key="entry.version" class="vh-card">
          <div class="vh-card-head">
            <h2>
              {{ entry.version }}
              <span v-if="entry.codename" class="vh-codename">{{ entry.codename }}</span>
            </h2>
            <div class="vh-meta">
              <span class="vh-status">{{ entry.status }}</span>
              <span class="vh-period">{{ entry.period }}</span>
            </div>
          </div>
          <p class="vh-summary">{{ entry.summary }}</p>
          <h3 class="vh-highlights-title">{{ entry.highlightsTitle }}</h3>
          <ul class="vh-highlights">
            <li v-for="(item, i) in entry.highlights" :key="i">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VersionHistory",
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  computed: {
    vh() {
      return this.currentMessages.VersionHistory;
    },
  },
};
</script>

<style scoped>
.version-history-page {
  background-color: #f4f4f4;
}

.vh-hero {
  padding: 70px 0 50px;
  background: linear-gradient(135deg, #764ba2 0%, #1f449b 100%);
  color: #ffffff;
  text-align: center;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.vh-hero h1 {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.vh-description {
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0 auto 22px;
  max-width: 760px;
}

.vh-naming {
  font-size: 1rem;
  line-height: 1.7;
  color: #e8e3f2;
  border-left: 3px solid #f9ac41;
  padding: 4px 18px;
  max-width: 760px;
  margin: 0 auto;
  text-align: left;
}

.vh-naming strong {
  color: #f9ac41;
}

.vh-body {
  padding: 50px 0 90px;
}

.vh-current {
  background: #ffffff;
  border: 5px dashed #f9ac41;
  padding: 32px 36px;
  margin-bottom: 40px;
  text-align: left;
}

.vh-current-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: #f9ac41;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.vh-current h2 {
  color: #764ba2;
  font-size: 2rem;
  margin-bottom: 12px;
}

.vh-current p {
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 18px;
}

.vh-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
}

.vh-back:hover {
  color: #764ba2;
}

.vh-card {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 32px 36px;
  margin-bottom: 28px;
  text-align: left;
}

.vh-card-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
  margin-bottom: 18px;
}

.vh-card-head h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.vh-codename {
  font-size: 1.1rem;
  color: #f9ac41;
  font-weight: 600;
}

.vh-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.vh-status {
  background: rgba(118, 75, 162, 0.1);
  color: #764ba2;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 4px 12px;
  border-radius: 999px;
}

.vh-period {
  color: #7f8c8d;
  font-size: 0.95rem;
}

.vh-summary {
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.75;
  margin-bottom: 20px;
}

.vh-highlights-title {
  color: #667eea;
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.vh-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vh-highlights li {
  position: relative;
  padding-left: 26px;
  margin-bottom: 12px;
  color: #2c3e50;
  line-height: 1.7;
}

.vh-highlights li::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 0.6em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f9ac41;
}

@media (max-width: 768px) {
  .vh-hero h1 {
    font-size: 2.2rem;
  }

  .vh-description {
    font-size: 1.05rem;
  }

  .vh-current,
  .vh-card {
    padding: 26px 22px;
  }

  .vh-card-head h2 {
    font-size: 1.5rem;
  }
}
</style>
