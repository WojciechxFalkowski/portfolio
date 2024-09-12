# Dockerfile for Nginx in Docker Compose setup

# Use the official Nginx base image
FROM nginx:stable-alpine3.17-slim

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d