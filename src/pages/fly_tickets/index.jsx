import { useState, useRef, useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import Grid from "@mui/material/Unstable_Grid2";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Chip from "@material-ui/core/Chip";

const LocationTags = ({ tags, handleTagClick }) => (
    <Box display="flex" flexWrap="wrap" alignItems="center" mb="20px">
        {tags.map((tag) => (
            <Chip
                key={tag}
                label={tag}
                mr="10px"
                mb="10px"
                mx="10px"
                my="10px"
                onClick={() => handleTagClick(tag)}
            />
        ))}
    </Box>
);



const FlyTickets = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [filteredEvents, setFilteredEvents] = useState(null);

    const allEvents = [
        {
            id: "12315",
            title: "All-day event",
            date: "2023-03-14",
            location: "Bali"
        },
        {
            id: "5123",
            title: "Timed event",
            date: "2023-03-15",
            location: "Bali"
        },
        {
            id: "111",
            title: "Ciaso",
            date: "2023-03-16",
            location: "Spain"
        }
    ];

    //calculate height of div based on n events
    const [listHeight, setListHeight] = useState(0);
    const listRef = useRef(null);
    const maxHeight = 950;

    //create an array of unique locations
    const locations = Array.from(new Set(allEvents.map(event => event.location)));

    // Define state variables to keep track of the selected tag and filtered notes
    const [events, setEvents] = useState(allEvents);

    // // Define function to handle tag clicks
    const handleTagClick = (location) => {
        setEvents(allEvents.filter((event) => event.location.includes(location)));
        setFilteredEvents(allEvents.filter((event) => event.location === location));
    };


    // const handleDateClick = (selected) => {
    //     const title = prompt("Please enter a new title for your event");
    //     const calendarApi = selected.view.calendar;
    //     calendarApi.unselect();

    //     if (title) {
    //         calendarApi.addEvent({
    //             id: `${selected.dateStr}-${title}`,
    //             title,
    //             start: selected.startStr,
    //             end: selected.endStr,
    //             allDay: selected.allDay,
    //         });
    //     }
    // };

    // const handleEventClick = (selected) => {
    //     if (
    //         window.confirm(
    //             `Are you sure you want to delete the event '${selected.event.title}'`
    //         )
    //     ) {
    //         selected.event.remove();
    //     }
    // };

    useEffect(() => {
        const listHeight = listRef.current.getBoundingClientRect().height;
        setListHeight(listHeight);
    }, [events]);


    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <LocationTags tags={locations} handleTagClick={handleTagClick} />
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                    <Box
                        backgroundColor={colors.primary[400]}
                        p="15px"
                        borderRadius="4px"
                    >
                        <Typography variant="h5">Events</Typography>
                        <div style={{ height: `min(${listHeight}px, ${maxHeight}px)`, overflow: 'auto' }}>
                            <List ref={listRef}>
                                {events.map((event) => (
                                    <ListItem
                                        key={event.id}
                                        sx={{
                                            backgroundColor: colors.greenAccent[500],
                                            margin: '10px 0',
                                            borderRadius: '2px',
                                        }}
                                    >
                                        <ListItemText
                                            primary={event.title}
                                            secondary={
                                                <Typography>
                                                    {formatDate(event.start, {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric',
                                                    })}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={8}>
                    <Box ml="15px">
                        <FullCalendar
                            height="75vh"
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                interactionPlugin,
                                listPlugin,
                            ]}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                            }}
                            initialView="dayGridMonth"
                            // editable={true}
                            // selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            // select={handleDateClick}
                            // eventClick={handleEventClick}
                            //eventsSet={(events) => { setEvents(events); }}
                            initialEvents={allEvents}
                            eventContent={(eventInfo) => {
                                //console.log(eventInfo.event)
                                return (
                                    <div
                                        style={{
                                            backgroundColor: 'red', // change the background color of the event tag
                                            borderRadius: '4px', // add rounded corners to the event tag
                                            padding: '5px', // add some padding to the event tag
                                            fontSize: '12px', // change the font size of the event tag
                                            fontWeight: 'bold', // add bold font weight to the event tag
                                        }}
                                    >
                                        {eventInfo.event.title} <br />
                                        {eventInfo.event.extendedProps.location}
                                    </div>
                                );
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FlyTickets;
