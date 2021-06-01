import { useState } from 'react'

import styles from './styles.module.scss'

import { HiOutlineTrash, HiOutlinePlus } from 'react-icons/hi'
import { Box, Button, Flex, Heading, Icon, Input, ListItem, TagLabel, Text, UnorderedList } from '@chakra-ui/react';

type Task = {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask() {
        if (!newTaskTitle) return;

        let date = new Date();

        let newTask: Task = {
            id: date.getTime(),
            title: newTaskTitle,
            isComplete: false,
        }

        setTasks(oldState => [...oldState, newTask])
        setNewTaskTitle('')
    }

    function handleToggleTaskCompletion(id: number) {
        const newTasks = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete,
        } : task)

        setTasks(newTasks);
    }

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter(task => task.id !== id);

        setTasks(filteredTasks);
    }

    return (
        <Flex
            as="section"
            bg="gray.800"
            borderRadius={4}
            maxW="70rem"
            mx="auto"
            px={16}
            py={14}
            display="flex"
            flexDirection="column"
        >
            <Flex
                as="header"
                direction={["column", "row"]}
                alignItems="center"
                w="fit-content"
            >
                <Heading
                    as="h2"
                    textAlign="center"
                    fontSize="4xl"
                    pb={[16, 0]}
                >
                    My tasks
                </Heading>
                <Flex
                    as="div"
                    h={4}
                    direction={["column", "row"]}
                    gridGap={1}
                    alignItems="center"
                >
                    <Input
                        type="text"
                        h='full'
                        placeholder="Add new task"
                        _placeholder={{ color: '#EDF2F7' }}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        value={newTaskTitle}
                        id="text-input"
                        flex="1"
                        bg="gray.700"
                        color="gray.100"
                        px={6}
                        py={5}
                        borderRadius={2}
                        border={0}
                    />
                    <Box
                        as="button"
                        fontWeight="700"
                        borderRadius={2}
                        border={0}
                        bg="green.500"
                        color="gray.100"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        p={3}
                        transition='all 200ms'
                        _hover={{ bg: "green.600" }}
                        aria-label="Create new task"
                        type="submit"
                        onClick={handleCreateNewTask}
                    >
                        <Icon
                            as={HiOutlinePlus}
                            height={4}
                            color="white"
                        />
                    </Box>
                </Flex>
            </Flex>

            <Flex
                as="main"
                mt="3rem"
                className={styles.main}
            >
                <UnorderedList>
                    {tasks.map(task => (
                        <ListItem
                            key={task.id}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom="1px solid #718096"
                            px="1rem"
                            py={0}
                        >
                            <Flex
                                as="div"
                                align="center"
                                gridGap="14px"
                                outline={0}
                                className={task.isComplete ? styles.completed : ''}
                            >
                                <label
                                    className={styles.checkboxContainer}
                                >
                                    <Input
                                        type="checkbox"
                                        readOnly
                                        checked={task.isComplete}
                                        onClick={() => handleToggleTaskCompletion(task.id)}
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                                <Text>
                                    {task.title}
                                </Text>
                            </Flex>

                            <Button>
                                <Icon as={HiOutlineTrash} onClick={() => handleRemoveTask(task.id)} />
                            </Button>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </Flex>
    )
}