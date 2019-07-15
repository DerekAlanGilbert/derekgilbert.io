<template>
  <Layout :show-logo="false">
    <div class="me-container">
      <h1>This Im currently interested in</h1>
      <div>
        <ul class="tabs">
          <li
            :class="[{ selected: selectedTab === tabItem.name }, 'tab']"
            @click="selectedTab = tabItem.name"
            v-for="tabItem in tabItems"
            :key="tabItem.id"
          >
            {{ tabItem.name }}
          </li>
        </ul>
      </div>

      <div class="tab-item-body">
        <div
          v-show="selectedTab === 'Books'"
          v-for="book in $page.books.edges"
          class="content-box w-100"
        >
          {{ book.node.title }}
        </div>
        <div class="content-box w-100" v-show="selectedTab === 'Articles'">
          Articles
        </div>
        <div class="content-box w-100" v-show="selectedTab === 'Websites'">
          Websites
        </div>
        <div
          v-show="selectedTab === 'Tools'"
          v-for="tool in $page.tools.edges"
          class="content-box w-100"
        >
          {{ tool.node.title }}
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  tools: allTool {
    edges {
      node {
        title
      }
    }
  },
  books: allBook {
    edges {
      node {
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      selectedTab: "Books",
      tabItems: [
        { name: "Books" },
        { name: "Articles" },
        { name: "Websites" },
        { name: "Tools" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.me-container {
  display: grid;
  grid-template-columns: 1fr;
  max-width: var(--content-width);
  margin: auto;
  .tab-item-body {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
}
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin: 0px !important;
  .tab {
    padding: 0.3rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: var(--bg-color-darker);
      border-radius: var(--radius);
    }
  }
  .selected {
    border-radius: var(--radius);
    color: var(--bg-color);
    background-color: var(--link-color);
  }
}
</style>
