import { useEffect, useState } from 'react';
import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';

import {
    Box, Button, Flex, Heading, Icon, Input, ListItem, Text, UnorderedList
} from '@chakra-ui/react';

import styles from './styles.module.scss';

type Task = {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        setTasks([{
            id: 1,
            title: 'Task example',
            isComplete: false
        }, {
            id: 2,
            title: 'Completed task example',
            isComplete: true
        }])
    }, [])

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
            className={styles.taskList}
            bg="gray.800"
            borderRadius={8}
            w='100%'
            maxW="70rem"
            mx="auto"
            px={16}
            py={14}
            flexDirection="column"
        >
            <Flex
                as="header"
                color="gray.100"
                flexDir={["column", "column", "row"]}
                justifyContent="space-between"
                alignItems="center"
                mb={[12, 12, 0]}
            >
                <Heading
                    as="h2"
                    textAlign="center"
                    fontSize="4xl"
                    pb={[8, 8, 0]}
                >
                    My tasks
                </Heading>
                <Flex
                    as="div"
                    fontSize="16px"
                    h={4}
                    direction={["column", "row"]}
                    gridGap={4}
                    alignItems="center"
                >
                    <Input
                        type="text"
                        placeholder="Add new task"
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        value={newTaskTitle}
                        id="text-input"
                        color="gray.100"
                        bg="gray.700"
                        px={6}
                        py={3}
                        borderRadius="0.5rem"
                        border={0}
                    />
                    <Box
                        as="button"
                        fontWeight="700"
                        borderRadius="0.5rem"
                        border={0}
                        bg="blue.500"
                        color="gray.100"
                        display="flex"
                        flexDir="row"
                        alignItems="center"
                        p={3}
                        _hover={{ bg: "blue.600" }}
                        transition='background 250ms'
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
                <UnorderedList
                    w='100%'
                >
                    {tasks.map(task => (
                        <ListItem
                            as="li"
                            key={task.id}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom="1px solid #718096"
                            py="1rem"
                        >
                            <Flex
                                as="div"
                                align="center"
                                gridGap="0.875rem"
                                outline={0}
                                className={task.isComplete ? styles.completed : ''}
                            >
                                <label
                                    className={styles.checkboxContainer}
                                >
                                    <Input
                                        type="checkbox"
                                        position="absolute"
                                        opacity={0}
                                        cursor="pointer"
                                        h={0}
                                        w={0}
                                        aria-label="Checkmark"
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

                            <Button
                                border={0}
                                onClick={() => handleRemoveTask(task.id)}

                            >
                                <Icon
                                    as={HiOutlineTrash}
                                    color='red.500'
                                    aria-label="Remove task"
                                />
                            </Button>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </Flex>
    )
}