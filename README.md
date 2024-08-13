# single-page-app

    single page applicaton creating using nodejs-mongodb-docker

# Run the Docker Container in Development Mode:

    docker-compose up

    Now, whenever you make changes to your code, nodemon will automatically restart the server inside the Docker container without needing to rebuild the entire image.

# 3.1. Clean Up Docker Resources

    Sometimes, Docker caches can cause issues. Clean up your Docker environment:

    docker-compose down --rmi all --volumes --remove-orphans
    docker system prune -a --volumes

    This command removes all stopped containers, unused networks, and dangling images, forcing Docker to rebuild everything from scratch.

# 3.2. Rebuild the Docker Containers

    After cleaning up, rebuild and start the containers:

    docker-compose up --build

# 3.3. Check Logs for More Details

    If the error persists, check the logs for more details:

    docker-compose logs app
