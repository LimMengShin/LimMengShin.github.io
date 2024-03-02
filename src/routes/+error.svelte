<script>
    import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {404}>
    <div class="error-container">
        <h1 class="error-code">404</h1>
        <p class="error-message">Oops! It looks like you're lost.</p>
        <p class="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" class="error-link">Go back home</a>
    </div>
</CommonPage>

<style lang="scss">
    .error-container {
        text-align: center;
        margin-top: 50px;
    }

    .error-code {
        font-size: 4rem;
        margin-bottom: 10px;
        color: #ff5722; /* Orange color */
    }

    .error-message {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .error-description {
        font-size: 1rem;
        margin-bottom: 20px;
        color: #757575; /* Gray color */
    }

    .error-link {
        font-size: 1rem;
        padding: 10px 20px;
        border: 2px solid #ff5722; /* Orange color */
        border-radius: 4px;
        color: #ff5722; /* Orange color */
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .error-link:hover {
        background-color: #ff5722; /* Orange color */
        color: #fff; /* White color */
    }
</style>
