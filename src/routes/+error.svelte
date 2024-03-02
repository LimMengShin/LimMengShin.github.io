<script>
    import CommonPage from '$lib/components/CommonPage.svelte';

    const title = "404";
</script>

<CommonPage {title}>
    <div class="error-container">
        <p class="error-message">Oops! It looks like you're lost.</p>
        <p class="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" class="error-link">Go back home</a>
    </div>
</CommonPage>

<style lang="scss">
    .error-container {
        text-align: center;
    }

    .error-message {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .error-description {
        font-size: 1rem;
        margin-bottom: 50px;
    }

    .error-link {
        font-size: 1rem;
        padding: 10px 20px;
        border: 2px solid;
        border-radius: 4px;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
</style>
