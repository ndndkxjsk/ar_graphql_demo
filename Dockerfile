# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy your static files to the Nginx web directory
COPY ./ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
