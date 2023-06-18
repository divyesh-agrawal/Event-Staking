import React, { Fragment, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import moment from 'moment';

import Calendar from '@components/Calendar';
import Layout from '@layouts/BaseLayout';
import { getAllPersonEvents } from '@utils/commonUtils';

import StyledPaper from './HomePage.styles';

const Home = () => {
  const [isEventFormOpen, setEventModalOpen] = useState(false);
  const [isTimeFieldsDisabled, setTimeFieldsDisable] = useState(false);
  const [isEventDetailsOpen, setEventDetailsOpen] = useState(false);
  const eventInitialValues = {
    title: '',
    description: '',
    start: '',
    end: '',
    amount: '',
  };

  const [currentEventDetails, setCurrentEventDetails] = useState({
    id: 0,
    ...eventInitialValues,
  });

  useEffect(() => {
    (async () => {
      console.log(await getAllPersonEvents());
    })();
  }, []);

  const events = {
    1: {
      id: 1,
      title: 'dummy',
      description: 'hello there',
      start: '2023-06-19 03:00:00',
      end: '2023-06-19 06:00:00',
      amount: 10,
    },
  };

  const [eventFormData, setEventFormData] = useState({ ...eventInitialValues });

  // useEffect(
  //   () => {
  //     console.log(eventFormData);
  //     console.log(currentEventDetails);
  //   },
  //   [eventFormData],
  //   currentEventDetails
  // );

  const handleDateClick = (viewType, startTime, endTime) => {
    if (viewType !== 'dayGridMonth') {
      setTimeFieldsDisable(true);
    }
    setEventFormData({
      ...eventFormData,
      start: startTime,
      end: endTime,
    });
    setEventModalOpen(true);
  };

  const handleEventClick = (eventID) => {
    setCurrentEventDetails({ ...events[eventID] });
    setEventDetailsOpen(true);
  };

  const handleEventFormClose = () => {
    setEventFormData((prevState) => ({ ...prevState, ...eventInitialValues }));
    setCurrentEventDetails((prevState) => ({
      ...prevState,
      id: 0,
      ...eventInitialValues,
    }));
    setEventModalOpen(false);
    setTimeFieldsDisable(false);
    setEventDetailsOpen(false);
  };

  const handleClick = () => {
    console.log('Yes');
  };

  const handleSubmit = () => {
    handleEventFormClose();
  };

  return (
    <Fragment key="Home Page">
      <Dialog
        open={isEventFormOpen || isEventDetailsOpen}
        onClose={handleEventFormClose}
        PaperComponent={StyledPaper}
        fullWidth
        maxWidth="xs"
      >
        <CloseIcon
          onClick={handleEventFormClose}
          sx={{ marginLeft: 'auto', cursor: 'pointer' }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Event Title"
          type="text"
          fullWidth
          required
          value={
            isEventDetailsOpen ? currentEventDetails.title : eventFormData.title
          }
          disabled={isEventDetailsOpen}
          onInput={(e) => {
            setEventFormData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
          }}
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Event Description"
          type="text"
          required
          fullWidth
          value={
            isEventDetailsOpen
              ? currentEventDetails.description
              : eventFormData.description
          }
          disabled={isEventDetailsOpen}
          onInput={(e) => {
            setEventFormData((prevState) => ({
              ...prevState,
              description: e.target.value,
            }));
          }}
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Amount"
          type="text"
          required
          fullWidth
          value={
            isEventDetailsOpen
              ? currentEventDetails.amount
              : eventFormData.amount
          }
          disabled={isEventDetailsOpen}
          onInput={(e) => {
            setEventFormData((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }));
          }}
          variant="standard"
        />
        <Typography variant="h6" fontSize="1rem" marginTop="0.75rem">
          Event Time:
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginTop="0.5rem"
          marginBottom="1rem"
          maxWidth="60%"
        >
          <TextField
            id="eventStart"
            type="time"
            required
            value={
              isEventDetailsOpen
                ? new Date(currentEventDetails.start).toLocaleTimeString()
                : new Date(eventFormData.start).toLocaleTimeString()
            }
            disabled={isTimeFieldsDisabled || isEventDetailsOpen}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              sx: ({ spacing }) => ({ padding: spacing(14, 10) }),
            }}
            onInput={(e) => {
              const time = e.target.value.split(':');
              const updatedTime = new Date(eventFormData.start);
              updatedTime.setHours(time[0]);
              updatedTime.setMinutes(time[1]);
              setEventFormData((prevState) => ({
                ...prevState,
                start: moment(updatedTime).format('YYYY-MM-DD HH:mm:ss'),
              }));
            }}
          />
          -
          <TextField
            id="eventEnd"
            type="time"
            required
            value={
              isEventDetailsOpen
                ? new Date(currentEventDetails.end).toLocaleTimeString()
                : new Date(eventFormData.end).toLocaleTimeString()
            }
            disabled={isTimeFieldsDisabled || isEventDetailsOpen}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ sx: { padding: '14px 10px' } }}
            onInput={(e) => {
              const time = e.target.value.split(':');
              const updatedTime = new Date(eventFormData.end);
              updatedTime.setHours(time[0]);
              updatedTime.setMinutes(time[1]);
              setEventFormData((prevState) => ({
                ...prevState,
                end: moment(updatedTime).format('YYYY-MM-DD HH:mm:ss'),
              }));
            }}
          />
        </Box>
        {isEventDetailsOpen ? (
          <Fragment key="attending">
            <Divider sx={({ spacing }) => ({ marginBottom: spacing(12) })} />
            <Box
              display="flex"
              alignItems="center"
              width="60%"
              justifyContent="space-between"
            >
              <Typography variant="body1">Attending?</Typography>
              <Button
                size="small"
                onClick={handleClick}
                sx={({ spacing }) => ({ padding: spacing(3, 8) })}
                color="secondary"
              >
                Yes
              </Button>
              <Button
                size="small"
                onClick={handleEventFormClose}
                sx={({ spacing }) => ({ padding: spacing(3, 8) })}
              >
                No
              </Button>
            </Box>
          </Fragment>
        ) : (
          <Button type="submit" onClick={handleSubmit}>
            Save
          </Button>
        )}
      </Dialog>
      <Layout showHeader>
        <Box padding="1.5rem">
          <Box display="flex">
            <Paper
              sx={{ padding: '1.5rem', width: '100%', marginRight: '2rem' }}
              elevation={3}
            >
              <Calendar
                handleDateClick={handleDateClick}
                events={events}
                handleEventClick={handleEventClick}
              />
            </Paper>
            {/* <Paper sx={{ flexGrow: 1 }}></Paper> */}
          </Box>
        </Box>
      </Layout>
    </Fragment>
  );
};

export default Home;
