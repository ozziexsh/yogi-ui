import Heading from './components/heading';
import Button, { IconButton } from './components/button';
import FormControl from './components/form-control';
import FormInput from './components/form-input';
import FormLabel from './components/form-label';
import FormHelperMessage from './components/form-helper-message';
import FormErrorMessage from './components/form-error-message';
import FormSelect from './components/form-select';
import FormTextarea from './components/form-textarea';
import FormRadio from './components/form-radio';
import FormCheckbox from './components/form-checkbox';
import FormRadioGroup from './components/form-radio-group';
import { useState } from 'react';
import FormCheckboxGroup from './components/form-checkbox-group';
import Badge from './components/badge';
import Table from './components/table';
import Thead from './components/thead';
import Tr from './components/tr';
import Th from './components/th';
import Tbody from './components/tbody';
import Td from './components/td';
import Switch, { SwitchGroup, SwitchLabel } from './components/switch';
import Avatar from './components/avatar';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  useModalToggle,
} from './components/modal';
import Alert from './components/alert';
import Drawer, { DrawerBody, DrawerHeader } from './components/drawer';

function AdjustmentIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
      />
    </svg>
  );
}

function TrashIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

function App() {
  const [radioGroup, setRadioGroup] = useState('oranges');
  const [checkboxGroup, setCheckboxGroup] = useState<string[]>([
    'apples',
    'oranges',
  ]);
  const [sw, setSw] = useState(false);
  const defaultModal = useModalToggle();
  const noHeaderModal = useModalToggle();
  const noFooterModal = useModalToggle();
  const rightDrawer = useModalToggle();
  const leftDrawer = useModalToggle();
  const topDrawer = useModalToggle();
  const bottomDrawer = useModalToggle();

  const colors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];

  return (
    <div className={'mx-auto max-w-4xl p-12'}>
      <div className="space-y-8">
        <h1 className={'text-4xl'}>Typography</h1>

        <div className="space-y-4">
          <Heading>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </div>

        <h1 className={'text-4xl'}>Badges</h1>

        <div className="space-y-4">
          {colors.map(color => (
            <div key={color} className={'flex space-x-2'}>
              <Badge colorScheme={color}>Default</Badge>
              <Badge colorScheme={color} variant={'outline'}>
                Outline
              </Badge>
              <Badge colorScheme={color} variant={'subtle'}>
                Subtle
              </Badge>
            </div>
          ))}
        </div>

        <h1 className={'text-4xl'}>Avatars</h1>

        <div className={'flex items-center space-x-4'}>
          <Avatar />
          <Avatar name={'Ozzie Neher'} />
          <Avatar name={'Ozzie Neher'} src={'https://i.pravatar.cc/100'} />
        </div>

        <h1 className={'text-4xl'}>Alerts</h1>

        <div className={'space-y-4'}>
          <Alert status={'info'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Alert>
          <Alert status={'success'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Alert>
          <Alert status={'warning'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Alert>
          <Alert status={'error'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Alert>
          <Alert icon={TrashIcon}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            corporis ducimus eos, esse inventore iste minus non odio, odit
            praesentium saepe, vitae voluptates. Asperiores commodi dolore eos
            modi quae ullam!
          </Alert>
        </div>

        <h1 className={'text-4xl'}>Buttons</h1>

        <div className="space-y-4">
          {colors.flatMap(color =>
            [false, true].flatMap(loading => (
              <div
                key={`${color}-${loading}`}
                className="flex flex-col items-start space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:space-y-0 sm:space-x-4"
              >
                {(['solid', 'subtle', 'ghost', 'outline', 'link'] as const).map(
                  variant => (
                    <Button
                      key={`${color}-${loading}-${variant}`}
                      colorScheme={color}
                      loading={loading}
                      variant={variant}
                    >
                      Yaba daba do
                    </Button>
                  ),
                )}
              </div>
            )),
          )}

          <div className="flex flex-col items-start space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:space-y-0 sm:space-x-4">
            <Button leftIcon={<AdjustmentIcon className={'h-4 w-4'} />}>
              Yaba daba do
            </Button>
            <Button rightIcon={<AdjustmentIcon className={'h-4 w-4'} />}>
              Yaba daba do
            </Button>
            <Button
              loading={true}
              leftIcon={<AdjustmentIcon className={'h-4 w-4'} />}
            >
              Yaba daba do
            </Button>
            <Button
              loading={true}
              rightIcon={<AdjustmentIcon className={'h-4 w-4'} />}
            >
              Yaba daba do
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:space-y-0 sm:space-x-4">
          <IconButton icon={TrashIcon} colorScheme={'indigo'} />
          <IconButton
            icon={TrashIcon}
            variant={'subtle'}
            colorScheme={'indigo'}
          />
          <IconButton
            icon={TrashIcon}
            variant={'ghost'}
            colorScheme={'indigo'}
          />
          <IconButton
            icon={TrashIcon}
            variant={'outline'}
            colorScheme={'indigo'}
          />
          <IconButton
            icon={TrashIcon}
            variant={'link'}
            colorScheme={'indigo'}
          />
        </div>

        <h1 className={'text-4xl'}>Modal</h1>

        <div>
          <div className="flex flex-col items-start space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:space-y-0 sm:space-x-4">
            <Button onClick={defaultModal.open}>Open modal</Button>
            <Button onClick={noHeaderModal.open}>Modal without header</Button>
            <Button onClick={noFooterModal.open}>Modal without footer</Button>
          </div>

          <Modal {...defaultModal.props}>
            <ModalHeader>Create an account</ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <FormInput />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <FormInput />
                </FormControl>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="flex items-center justify-end space-x-2">
                <Button variant={'ghost'} onClick={defaultModal.close}>
                  Cancel
                </Button>
                <Button onClick={defaultModal.close}>Create</Button>
              </div>
            </ModalFooter>
          </Modal>

          <Modal {...noHeaderModal.props}>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda dignissimos ex laborum soluta! Accusantium commodi
                dicta dolorem, esse exercitationem illo in, ipsum molestiae nam,
                nobis obcaecati rem repellendus reprehenderit vel?
              </p>
            </ModalBody>
            <ModalFooter>
              <div className="flex items-center justify-end space-x-2">
                <Button variant={'ghost'} onClick={noHeaderModal.close}>
                  Cancel
                </Button>
                <Button onClick={noHeaderModal.close}>Create</Button>
              </div>
            </ModalFooter>
          </Modal>

          <Modal {...noFooterModal.props}>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda dignissimos ex laborum soluta! Accusantium commodi
                dicta dolorem, esse exercitationem illo in, ipsum molestiae nam,
                nobis obcaecati rem repellendus reprehenderit vel?
              </p>
            </ModalBody>
          </Modal>
        </div>

        <h1 className={'text-4xl'}>Drawers</h1>

        <div>
          <div className="flex flex-col items-start space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:space-y-0 sm:space-x-4">
            <Button onClick={rightDrawer.open}>Open Right Drawer</Button>
            <Button onClick={leftDrawer.open}>Open Left Drawer</Button>
            <Button onClick={topDrawer.open}>Open Top Drawer</Button>
            <Button onClick={bottomDrawer.open}>Open Bottom Drawer</Button>
          </div>

          <Drawer {...rightDrawer.props}>
            <DrawerHeader>Right Drawer</DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis consequatur culpa dolor ducimus eveniet iste, maxime
                natus nemo nisi, non nulla numquam odio perspiciatis quo
                similique sit totam voluptatem?
              </p>
            </DrawerBody>
          </Drawer>
          <Drawer {...leftDrawer.props} direction={'left'}>
            <DrawerHeader>Left Drawer</DrawerHeader>
            <DrawerBody>Content</DrawerBody>
          </Drawer>
          <Drawer {...topDrawer.props} direction={'top'}>
            <DrawerHeader>Top Drawer</DrawerHeader>
            <DrawerBody>Content</DrawerBody>
          </Drawer>
          <Drawer {...bottomDrawer.props} direction={'bottom'}>
            <DrawerHeader>Bottom Drawer</DrawerHeader>
            <DrawerBody>Content</DrawerBody>
          </Drawer>
        </div>

        <h1 className={'text-4xl'}>Tables</h1>

        <div>
          <Table className={'w-full'}>
            <Thead>
              <Tr>
                <Th>To Convert</Th>
                <Th>Into</Th>
                <Th>Multiply By</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        <h1 className={'text-4xl'}>Forms</h1>

        <div className="space-y-4">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput />
            <FormHelperMessage>
              Make sure to include an @ sign
            </FormHelperMessage>
          </FormControl>
          <FormControl invalid={true}>
            <FormLabel>Password</FormLabel>
            <FormInput />
            <FormErrorMessage>Must be at least 8 characters</FormErrorMessage>
          </FormControl>
          <FormControl required={true}>
            <FormLabel>Serial Number</FormLabel>
            <FormInput />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <FormSelect>
              <option value={'canada'}>Canada</option>
              <option value={'usa'}>USA</option>
              <option value={'zimbabwe'}>Zimbabwe</option>
            </FormSelect>
          </FormControl>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <FormTextarea />
          </FormControl>
          <div className={'flex flex-col space-y-1'}>
            <FormRadio>Apples</FormRadio>
            <FormRadio>Oranges</FormRadio>
            <FormRadio>Other</FormRadio>
          </div>
          <div className={'flex flex-col space-y-1'}>
            <FormRadioGroup
              value={radioGroup}
              onChange={setRadioGroup}
              colorScheme={'teal'}
            >
              <FormRadio value={'apples'}>Apples</FormRadio>
              <FormRadio value={'oranges'}>Oranges</FormRadio>
              <FormRadio value={'other'}>Other</FormRadio>
            </FormRadioGroup>
          </div>
          <div className={'flex flex-col space-y-1'}>
            <FormCheckbox>Apples</FormCheckbox>
            <FormCheckbox>Oranges</FormCheckbox>
            <FormCheckbox>Other</FormCheckbox>
          </div>
          <div className={'flex flex-col space-y-1'}>
            <FormCheckboxGroup
              value={checkboxGroup}
              onChange={setCheckboxGroup}
              colorScheme={'indigo'}
            >
              <FormCheckbox value={'apples'}>Apples</FormCheckbox>
              <FormCheckbox value={'oranges'}>Oranges</FormCheckbox>
              <FormCheckbox value={'other'}>Other</FormCheckbox>
            </FormCheckboxGroup>
          </div>
          <div className={'space-y-4'}>
            <div>
              <Switch checked={sw} onChange={setSw} />
            </div>

            <div>
              <Switch checked={sw} onChange={setSw}>
                Label on right
              </Switch>
            </div>

            <div>
              <SwitchGroup>
                <SwitchLabel>Label on left</SwitchLabel>
                <Switch checked={sw} onChange={setSw} />
              </SwitchGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
