import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    {/* Project #1 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '350px', background: 'url(https://cdn.auth0.com/blog/es6rundown/logo.png) center / cover' }}>JS project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project #2 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '350px', background: 'url(https://cdn.auth0.com/blog/es6rundown/logo.png) center / cover' }}>JS project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project #3 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '350px', background: 'url(https://cdn.auth0.com/blog/es6rundown/logo.png) center / cover' }}>JS project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )



        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    {/* Project #1 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
                        }}>React project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project #2 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
                        }}>React project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid">
                    {/* Project #1 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvuCHonBiuXCY1wbBiJnNh3RDLbY-6l52-eWQ5EtgtDCNnU2f-) center / cover'
                        }}>Django project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project #2 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvuCHonBiuXCY1wbBiJnNh3RDLbY-6l52-eWQ5EtgtDCNnU2f-) center / cover'
                        }}>Django project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )

        } else if (this.state.activeTab === 3) {
            return (
                <div className="project-grid">
                    {/* Project #1 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://avatars3.githubusercontent.com/u/7363040?s=460&v=4) center / cover'
                        }}>Bootstrap project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project #2 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://avatars3.githubusercontent.com/u/7363040?s=460&v=4) center / cover'
                        }}>Bootstrap project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className="project-grid">
                    {/* Project #1 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoHwZ-rd-9DZhIqgE7TdAbRbT77mL-q81LPGK9vZLpM9ZPdiMhw) center / cover'
                        }}>WordPress project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project #2 */}
                    <Card shadow={5} style={{ Width: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '350px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoHwZ-rd-9DZhIqgE7TdAbRbT77mL-q81LPGK9vZLpM9ZPdiMhw) center / cover'
                        }}>WordPress project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>JS</Tab>
                    <Tab>React</Tab>
                    <Tab>Django</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>WordPress</Tab>
                </Tabs>

                <section className="project-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>

            </div>
        )
    }
}

export default Project;