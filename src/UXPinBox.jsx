import React from 'react';
import { windowWidth } from '@uxpin/expressions';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { LineChart } from '@mui/x-charts/LineChart';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function UXPinBox() {

const [open, setOpen] = React.useState(true);
const [visible, setVisible] = React.useState(false);
const [expanded, setExpanded] = React.useState(true);
const [value, setValue] = React.useState(undefined);
const [open2, setOpen2] = React.useState(false);
const [variant, setVariant] = React.useState('persistent');
const [paddingLeft, setPaddingLeft] = React.useState('250px');
function onResize() { if(windowWidth() < 769) { setVariant('temporary') }else {setVariant('persistent');setOpen(true);}if(windowWidth() < 769) { setPaddingLeft('0') }else {setPaddingLeft('250px');} }
React.useEffect(() => { window.addEventListener('resize', onResize);  return () => window.removeEventListener('resize', onResize)});

  return (<Box
  height="100%"
>
  <Drawer
    anchor="left"
    open={open}
    variant={variant}
    onClose={() => { setOpen(false); }}
  >
    <Toolbar
      sx={{ justifyContent: 'right', width: '250px' }}
    >
      <Stack
        direction="row"
        spacing="8px"
        width="250px"
        alignItems="center"
        justifyContent="center"
      >
        <Icon
          color="primary"
        >
          adb
        </Icon>
        <Typography
          variant="h2"
          href="#app-bar-with-responsive-menu"
          fontWeight="bold"
          color="primary.main"
          fontSize={26}
        >
          LOGO
        </Typography>
      </Stack>
    {visible &&   <IconButton
        color="inherit"
        aria-label="Menu"
      
      >
        <Icon>
          chevron_left
        </Icon>
      </IconButton> }
    </Toolbar>
    <Divider
      variant="fullWidth"
      orientation="horizontal"
    />
    <List
      disablePadding={true}
      dense={false}
    >
      <ListSubheader>
        Nested List
      </ListSubheader>
      <ListItem
        disablePadding={true}
      >
        <ListItemButton
          dense={false}
        >
          <ListItemIcon>
            <Icon
              baseClassName="material-icons-outlined"
            >
              send
            </Icon>
          </ListItemIcon>
          <ListItemText
            primary="Sent"
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        disableGutters={true}
        disablePadding={true}
      >
        <ListItemButton>
          <ListItemIcon>
            <Icon
              baseClassName="material-icons-outlined"
              fontSize="small"
            >
              drafts
            </Icon>
          </ListItemIcon>
          <ListItemText
            primary="Drafts"
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        disableGutters={true}
        disablePadding={true}
        alignItems="center"
      >
        <Accordion
          elevation={0}
          disableGutters={true}
          sx={{ width: '100%' }}
          expanded={expanded}
          onChange={(...args) => { let expanded = args[1]; setExpanded(expanded); }}
        >
          <AccordionSummary
            expandIcon={
              <Icon>
                expand_more
              </Icon>
            }
          >
            <ListItemIcon>
              <Icon
                baseClassName="material-icons-outlined"
                fontSize="small"
              >
                inbox
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary="Inbox"
            />
          </AccordionSummary>
          <AccordionDetails>
            <List
              disablePadding={true}
              dense={true}
            >
              <ListItem
                disablePadding={true}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Icon>
                      star
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Starred"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </List>
  </Drawer>
  <Stack
    direction="column"
    paddingLeft={paddingLeft}
  >
    <AppBar
      position="static"
    >
      <Toolbar
        justifyContent="space-between"
      >
        <Hidden
          smUp={true}
        >
          <IconButton
            color="inherit"
            aria-label="Menu"
            edge="start"
            onClick={() => { setOpen(true); }}
          >
            <Icon>
              menu
            </Icon>
          </IconButton>
        </Hidden>
        <Box
          flexGrow={1}
          paddingLeft="8px"
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{ startAdornment: <Icon>search</Icon> }}
            sx={{ "& .MuiOutlinedInput-root": { background: '#ffffff' } }}
            value={value}
            onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
          />
        </Box>
        <Stack
          direction="row"
          spacing="16px"
        >
          <Badge
            badgeContent="1"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="secondary"
            overlap="circular"
          >
            <IconButton
              color="inherit"
            >
              <Icon
                baseClassName="material-icons-outlined"
              >
                shopping_bag
              </Icon>
            </IconButton>
          </Badge>
          <Badge
            badgeContent="3"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="secondary"
            overlap="circular"
          >
            <IconButton
              color="inherit"
            >
              <Icon
                baseClassName="material-icons-outlined"
              >
                notifications
              </Icon>
            </IconButton>
          </Badge>
          <Menu
            anchorEl="#account-button"
            autoFocus={false}
            open={open2}
          >
            <List
              disablePadding={true}
            >
              <ListItem
                disablePadding={true}
                disableGutters={true}
              >
                <ListItemButton
                  divider={true}
                >
                  <ListItemAvatar>
                    <Avatar
                      src="https://i.pravatar.cc/65?img=45"
                    >
                      <Icon>
                        people
                      </Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="My Account"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disableGutters={true}
                disablePadding={true}
              >
                <ListItemButton
                  dense={true}
                >
                  <ListItemIcon>
                    <Icon
                      fontSize="small"
                      baseClassName="material-icons-outlined"
                    >
                      add
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Add Account"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disableGutters={true}
                disablePadding={true}
              >
                <ListItemButton
                  dense={true}
                >
                  <ListItemIcon>
                    <Icon
                      fontSize="small"
                      baseClassName="material-icons-outlined"
                    >
                      settings
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Settings"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disableGutters={true}
                disablePadding={true}
              >
                <ListItemButton
                  dense={true}
                >
                  <ListItemIcon>
                    <Icon
                      fontSize="small"
                      baseClassName="material-icons-outlined"
                    >
                      logout
                    </Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Logout"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Menu>
          <ButtonBase
            sx={{ padding: '4px', borderRadius: '8px' }}
            disabled={false}
            id="account-button"
            onClick={() => { setOpen2(true); }}
          >
            <Avatar
              sx={{ width: '28px', height: '28px' }}
              src="https://i.pravatar.cc/65?img=45"
            />
            <Typography
              variant="body2"
              marginLeft="8px"
              color="inherit"
              noWrap={true}
            >
              John Doe
            </Typography>
          </ButtonBase>
        </Stack>
      </Toolbar>
    </AppBar>
    <Box
      padding="20px"
      minHeight="900px"
    >
      <Breadcrumbs
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          Home
        </Link>
        <Typography
          color="text.primary"
        >
          Dashboard
        </Typography>
      </Breadcrumbs>
      <Typography
        variant="h4"
        marginBottom="24px"
        paddingTop="28px"
      >
        Dashboard
      </Typography>
      <Grid
        container={true}
        spacing={2}
        paddingBottom="40px"
      >
        <Grid
          item={true}
          xs={12}
          md="6"
          lg="3"
        >
          <Card
            variant="outlined"
          >
            <CardContent>
              <Stack
                spacing="2"
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  fontSize={18}
                >
                  Total Page Views
                </Typography>
                <Stack
                  direction="row"
                  spacing="8px"
                  alignItems="center"
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem={true}
                    />
                  }
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    4,42,236
                  </Typography>
                  <Chip
                    label="59.3%"
                    size="small"
                    color="success"
                    sx={{ fontSize: '0.75rem' }}
                    icon={
                      <Icon>
                        trending_up
                      </Icon>
                    }
                  />
                </Stack>
                <Box>
                  <Typography
                    variant="caption"
                  >
                    You made an extra 
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="success.main"
                  >
                     35,000 
                  </Typography>
                  <Typography
                    variant="caption"
                  >
                    this year
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item={true}
          xs={12}
          md="6"
          lg="3"
        >
          <Card
            variant="outlined"
          >
            <CardContent>
              <Stack
                spacing="2"
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  fontSize={18}
                >
                  Total Orders
                </Typography>
                <Stack
                  direction="row"
                  spacing="8px"
                  alignItems="center"
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem={true}
                    />
                  }
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    4,42,236
                  </Typography>
                  <Chip
                    label="59.3%"
                    size="small"
                    color="warning"
                    sx={{ fontSize: '0.75rem' }}
                    icon={
                      <Icon>
                        trending_down
                      </Icon>
                    }
                  />
                </Stack>
                <Box>
                  <Typography
                    variant="caption"
                  >
                    You lost 
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="warning.main"
                  >
                     35,000 
                  </Typography>
                  <Typography
                    variant="caption"
                  >
                    this year
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item={true}
          xs={12}
          md="6"
          lg="3"
        >
          <Card
            variant="outlined"
          >
            <CardContent>
              <Stack
                spacing="2"
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  fontSize={18}
                >
                  Total Users
                </Typography>
                <Stack
                  direction="row"
                  spacing="8px"
                  alignItems="center"
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem={true}
                    />
                  }
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    4,42,236
                  </Typography>
                  <Chip
                    label="59.3%"
                    size="small"
                    color="success"
                    sx={{ fontSize: '0.75rem' }}
                    icon={
                      <Icon>
                        trending_up
                      </Icon>
                    }
                  />
                </Stack>
                <Box>
                  <Typography
                    variant="caption"
                  >
                    You made an extra 
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="success.main"
                  >
                     35,000 
                  </Typography>
                  <Typography
                    variant="caption"
                  >
                    this year
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item={true}
          xs={12}
          md="6"
          lg="3"
        >
          <Card
            variant="outlined"
          >
            <CardContent>
              <Stack
                spacing="2"
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  fontSize={18}
                >
                  Total Sales
                </Typography>
                <Stack
                  direction="row"
                  spacing="8px"
                  alignItems="center"
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem={true}
                    />
                  }
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    4,42,236
                  </Typography>
                  <Chip
                    label="59.3%"
                    size="small"
                    color="error"
                    sx={{ fontSize: '0.75rem' }}
                    icon={
                      <Icon>
                        trending_down
                      </Icon>
                    }
                  />
                </Stack>
                <Box>
                  <Typography
                    variant="caption"
                  >
                    You lost 
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="error.main"
                  >
                     35,000 
                  </Typography>
                  <Typography
                    variant="caption"
                  >
                    this year
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container={true}
        spacing={4}
        direction="row"
        paddingBottom="40px"
      >
        <Grid
          item={true}
          xs={12}
        >
          <Paper
            elevation={6}
            sx={{ padding: '20px' }}
          >
            <Typography
              variant="h6"
              marginBottom="24px"
            >
              Activity
            </Typography>
            <LineChart
              xAxis={[ { scaleType: 'point', data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ] } ]}
              series={[ { data: [ '30', '46', '29', '23', '38', '30', '15' ], label: 'PageViews', area: true, showMark: true }, { data: [ '28', '32', '10', '18', '35', '25', '10' ], label: 'Sessions', area: true, showMark: true } ]}
              height={300}
            />
          </Paper>
        </Grid>
        <Grid
          item={true}
          xs={12}
          lg="8"
        >
          <Paper
            sx={{ padding: '20px', height: '100%' }}
            variant="outlined"
          >
            <Typography
              variant="h6"
              marginBottom="24px"
            >
              Recent Orders
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      aria-sort="ascending"
                      scope="col"
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                      >
                        Order No.
                      </Typography>
                    </TableCell>
                    <TableCell
                      scope="col"
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                      >
                        Product
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                      >
                        QTY
                      </Typography>
                    </TableCell>
                    <TableCell
                      scope="col"
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                      >
                        Status
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="right"
                      scope="col"
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                      >
                        Total
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    role="checkbox"
                    aria-checked="false"
                    tabindex="-1"
                  >
                    <TableCell
                      scope="row"
                      id="enhanced-table-checkbox-0"
                    >
                      <Link
                        href="/free"
                      >
                        13256498
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                      >
                        Computer
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      <Typography
                        variant="body2"
                      >
                        2
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="row"
                        spacing="8px"
                        alignItems="center"
                      >
                        <Icon
                          color="error"
                          fontSize="small"
                          baseClassName="material-icons-outlined"
                        >
                          cancel
                        </Icon>
                        <Typography
                          variant="inherit"
                          color="error.main"
                        >
                          Rejected
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="right"
                    >
                      <Typography
                        variant="body2"
                      >
                        $2,376
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    role="checkbox"
                    aria-checked="false"
                    tabindex="-1"
                  >
                    <TableCell
                      scope="row"
                      id="enhanced-table-checkbox-0"
                    >
                      <Link
                        href="/free"
                      >
                        13256498
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                      >
                        Laptop
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      <Typography
                        variant="body2"
                      >
                        1
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="row"
                        spacing="8px"
                        alignItems="center"
                      >
                        <Icon
                          color="success"
                          fontSize="small"
                          baseClassName="material-icons-outlined"
                        >
                          check_circle
                        </Icon>
                        <Typography
                          variant="inherit"
                          color="success.main"
                        >
                          Approved
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="right"
                    >
                      <Typography
                        variant="body2"
                      >
                        $1,465
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    role="checkbox"
                    aria-checked="false"
                    tabindex="-1"
                  >
                    <TableCell
                      scope="row"
                      id="enhanced-table-checkbox-0"
                    >
                      <Link
                        href="/free"
                      >
                        13256498
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                      >
                        Laptop
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      <Typography
                        variant="body2"
                      >
                        1
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="row"
                        spacing="8px"
                        alignItems="center"
                      >
                        <Icon
                          color="success"
                          fontSize="small"
                          baseClassName="material-icons-outlined"
                        >
                          check_circle
                        </Icon>
                        <Typography
                          variant="inherit"
                          color="success.main"
                        >
                          Approved
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="right"
                    >
                      <Typography
                        variant="body2"
                      >
                        $1,465
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    role="checkbox"
                    aria-checked="false"
                    tabindex="-1"
                  >
                    <TableCell
                      scope="row"
                      id="enhanced-table-checkbox-0"
                    >
                      <Link
                        href="/free"
                      >
                        13256498
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                      >
                        Laptop
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      <Typography
                        variant="body2"
                      >
                        1
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="row"
                        spacing="8px"
                        alignItems="center"
                      >
                        <Icon
                          color="success"
                          fontSize="small"
                          baseClassName="material-icons-outlined"
                        >
                          check_circle
                        </Icon>
                        <Typography
                          variant="inherit"
                          color="success.main"
                        >
                          Approved
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="right"
                    >
                      <Typography
                        variant="body2"
                      >
                        $1,465
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid
          item={true}
          xs={12}
          lg="4"
        >
          <Paper
            sx={{ padding: '20px', height: '100%' }}
            variant="outlined"
          >
            <Typography
              variant="h6"
              marginBottom="24px"
            >
              Sales Report
            </Typography>
            <BarChart
              xAxis={[ { scaleType: 'band', data: [ 'Q1', 'Q2', 'Q3', 'Q4' ] } ]}
              series={[ { data: [ '4', '3', '5', '2' ] }, { data: [ '3', '4', '3', '5' ] } ]}
              height={300}
            />
          </Paper>
        </Grid>
        <Grid
          item={true}
          xs="12"
        >
          <Typography
            variant="h6"
            marginBottom="24px"
          >
            Latest Blog Posts
          </Typography>
          <Stack
            direction="row"
            spacing="24px"
            alignItems="default"
          >
            <Card>
              <CardMedia
                component="img"
                height={140}
                image="https://picsum.photos/640"
                alt="Cool art"
              />
              <CardContent
                component="div"
              >
                <Typography
                  gutterBottom={true}
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  noWrap={true}
                >
                  Lorem ipsum dolor 
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap={true}
                >
                  Phasellus ut urna viverra tellus mattis laoreet. Sed finibus ante sit amet magna consequat facilisis non vestibulum risus. 
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="text"
                    endIcon={
                      <Icon
                        color="inherit"
                      >
                        chevron_right
                      </Icon>
                    }
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height={140}
                image="https://picsum.photos/641"
                alt="Cool art"
              />
              <CardContent
                component="div"
              >
                <Typography
                  gutterBottom={true}
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  noWrap={true}
                >
                  Dis parturient montes
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap={true}
                >
                  Phasellus ut urna viverra tellus mattis laoreet. Sed finibus ante sit amet magna consequat facilisis non vestibulum risus. 
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="text"
                    endIcon={
                      <Icon
                        color="inherit"
                      >
                        chevron_right
                      </Icon>
                    }
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height={140}
                image="https://picsum.photos/642"
                alt="Cool art"
              />
              <CardContent
                component="div"
              >
                <Typography
                  gutterBottom={true}
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  noWrap={true}
                >
                  Nunc lobortis diam
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap={true}
                >
                  Phasellus ut urna viverra tellus mattis laoreet. Sed finibus ante sit amet magna consequat facilisis non vestibulum risus. 
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="text"
                    endIcon={
                      <Icon
                        color="inherit"
                      >
                        chevron_right
                      </Icon>
                    }
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    <Box
      padding="20px"
      bgcolor="grey.100"
      display="flex"
    >
      <Typography
        variant="body2"
        flexGrow={1}
        color="text.secondary"
      >
        © 2023. All rights reserved
      
      </Typography>
      <Stack
        direction="row"
        spacing="16px"
        divider={
          <Divider
            orientation="vertical"
            flexItem={true}
          />
        }
      >
        <Link
          variant="body2"
          color="text.secondary"
        >
          Help
        </Link>
        <Link
          variant="body2"
          color="text.secondary"
        >
          Terms and Conditions
        </Link>
      </Stack>
    </Box>
  </Stack>
</Box>);
}