import {
  Card,
  CardContent,
  Typography,
  Avatar,
  makeStyles,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";

const ShowProfile = ({ userProfile }) => {
  return (
    <Box
      mt={6}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {userProfile ? (
        <Card
          sx={{
            width: "30rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#F8F0E5",
          }}
        >
          <Avatar
            sx={{ height: "10rem", width: "10rem", ml: "1rem" }}
            alt={userProfile.login}
            src={userProfile.avatar_url}
          >
            <PersonIcon />
          </Avatar>
          <div>
            <CardContent>
              <Typography variant="h6">{userProfile.name}</Typography>
              {userProfile.twitter_username ? (
                <Typography variant="body1">
                  twitter@{userProfile.twitter_username}
                </Typography>
              ) : (
                ""
              )}
              <Typography variant="body1">{userProfile.bio}</Typography>
              <Typography variant="body1">{userProfile.location}</Typography>
              <a href={userProfile.blog}>{userProfile.blog}</a>
              <Typography variant="subtitle1">
                followers : {userProfile.followers}
              </Typography>
              <Typography variant="subtitle1">
                following : {userProfile.following}
              </Typography>
              <Typography variant="body1">
                LastUpdated : {userProfile.updated_at}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ) : (
        <Typography>No Profile Found</Typography>
      )}
    </Box>
  );
};

export default ShowProfile;
