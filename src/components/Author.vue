<template>
	<div class="author">

		<!-- <g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" /> -->

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metaData.siteName }}
		</h1>

		<p  v-if="showIntro" class="author__intro">
			Welcome to my website, someday I plan to create content here. But until then you can go the <g-link to="/me">me</g-link> page and discover a little bit about me.
		</p>

		<p  v-if="showLinks" class="author__links">
			<a href="https://twitter.com/DerekAGilbert">Follow on Twitter</a>
			<a href="https://github.com/DerekAlanGilbert">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle', 'showLinks', 'showIntro']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
